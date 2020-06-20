using System.Collections.Generic;

namespace Antidote.Dashboard.API.Models
{
    public class Analysis
    {
        public string Name { get; set; } = "";

        public List<string> Logs { get; set; } = new List<string>();

        public List<ReportItem> Report { get; set; } = new List<ReportItem>();
    }
}
