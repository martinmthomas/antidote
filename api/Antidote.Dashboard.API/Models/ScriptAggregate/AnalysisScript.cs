namespace Antidote.Dashboard.API.Models.ScriptAggregate
{
    public class AnalysisScript : Script
    {
        public AnalysisScript(ScriptOptions scriptOptions, string fileName) : base(scriptOptions, fileName)
        {
            Arguments.Add("SampleFileName", fileName);
        }
    }
}
