namespace Antidote.Dashboard.API.Models.ScriptAggregate
{
    public class ScanScript : Script
    {
        private object scannerName;
        private string ipAddress;

        public ScanScript(ScriptOptions scriptOptions, string sampleName, string ipAddress, string scannerName)
            : base(scriptOptions, sampleName)
        {
            Arguments.Add("IpAddress", ipAddress);
            Arguments.Add("ScannerName", scannerName);
        }
    }
}
