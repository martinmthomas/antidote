namespace Antidote.Dashboard.API.Models.ScriptAggregate
{
    public class Script
    {
        public string ToolName => "python3";
        public int TimeoutInMs { get; protected set; }
        public string ScriptFileName { get; protected set; }
        public string Arguments { get; protected set; }

        public Script(ScriptOptions scriptOptions)
        {
            TimeoutInMs = scriptOptions.TimeoutInMs;
            ScriptFileName = scriptOptions.ScriptFileName;
            Arguments = ScriptFileName;
        }
    }
}
