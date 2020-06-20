using System.Collections.Generic;
using System.Linq;

namespace Antidote.Dashboard.API.Models.ScriptAggregate
{
    public class Script
    {
        private const string ScriptFileNameKey = "ScriptFileName", SampleNameKey = "SampleName";

        public string ToolName => "python";

        public int TimeoutInMs { get; protected set; }

        public Dictionary<string, string> Arguments { get; protected set; } = new Dictionary<string, string>();

        public string ArgumentsSpaceSeperated => Arguments
            .Select(arg => arg.Value)
            .Aggregate((arg1, arg2) => arg1 + " " + arg2);

        public string SampleNameWithoutExtension
        {
            get
            {
                var sampleName = Arguments[SampleNameKey];
                if (sampleName.Contains('.'))
                    return sampleName.Substring(0, sampleName.LastIndexOf('.'));

                return sampleName;
            }
        }

        public Script(ScriptOptions scriptOptions, string sampleName)
        {
            TimeoutInMs = scriptOptions.TimeoutInMs;
            Arguments.Add(ScriptFileNameKey, scriptOptions.ScriptFileName);
            Arguments.Add(SampleNameKey, sampleName);
        }
    }
}
