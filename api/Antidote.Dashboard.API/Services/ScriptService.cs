using Antidote.Dashboard.API.Models;
using Antidote.Dashboard.API.Models.ScriptAggregate;
using Antidote.Dashboard.API.SignalrHub;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Antidote.Dashboard.API.Services
{
    public class ScriptService : IScriptService
    {
        private readonly IHubContext<AnalysisHub> _hub;

        private List<string> _shellOutput;
        private SignalRArgument<string> _signalRArgument;

        public ScriptService(IHubContext<AnalysisHub> hub)
        {
            _hub = hub;
            _shellOutput = new List<string>();
        }

        public async Task<List<string>> ExecuteAsync(Script script, SignalRArgument<string> signalRArgument)
        {
            _signalRArgument = signalRArgument;

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

            return _shellOutput;
        }

        private async void ProcessConsoleOutput(object sender, DataReceivedEventArgs e)
        {
            _signalRArgument.Data = e.Data;
            await _hub.Clients.All.SendAsync("NewLogItemCreated", _signalRArgument);
            _shellOutput.Add(e.Data);
        }
    }
}
