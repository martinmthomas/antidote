using Antidote.Dashboard.API.Models.ScriptAggregate;
using System.Diagnostics;

namespace Antidote.Dashboard.API.Services
{
    public class ScriptService : IScriptService
    {
        public string Execute(Script script)
        {
            var process = new Process()
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = script.ToolName,
                    Arguments = script.Arguments,
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                    CreateNoWindow = true,
                }
            };

            process.Start();
            if (!process.WaitForExit(script.TimeoutInMs))
                throw new System.Exception($"Aborting the script. Process did not complete in {script.TimeoutInMs} milliseconds.");

            return process.StandardOutput.ReadToEnd();
        }
    }
}
