using Antidote.Dashboard.API.Models.ScriptAggregate;
using Antidote.Dashboard.API.Repositories;
using Antidote.Dashboard.API.SignalrHub;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Antidote.Dashboard.API.Services
{
    public class ScriptService : IScriptService
    {
        private readonly IAnalysisRepository _analysisRepository;
        private readonly IHubContext<AnalysisHub> _hub;

        private List<string> _logs;

        public ScriptService(IAnalysisRepository analysisRepository, IHubContext<AnalysisHub> hub)
        {
            _analysisRepository = analysisRepository;
            _hub = hub;
            _logs = new List<string>();
        }

        public async Task ExecuteAsync(Script script)
        {
            var process = new Process()
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = script.ToolName,
                    Arguments = script.ArgumentsSpaceSeperated,
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                }
            };

            process.Start();
            process.BeginOutputReadLine();
            process.OutputDataReceived += ProcessConsoleOutput;

            var isSuccessful = process.WaitForExit(script.TimeoutInMs);
            process.Close();

            if (!isSuccessful)
                throw new System.Exception($"Aborting the script. Process did not complete in {script.TimeoutInMs} milliseconds.");

            if (_logs.Count > 0)
                await _analysisRepository.CreateLogFileAsync(script.SampleName, _logs);
        }

        private async void ProcessConsoleOutput(object sender, DataReceivedEventArgs e)
        {
            await _hub.Clients.All.SendAsync("NewLogItemCreated", e.Data);
            _logs.Add(e.Data);
        }
    }
}
