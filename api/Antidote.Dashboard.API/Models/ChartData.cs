using System.Collections.Generic;

namespace Antidote.Dashboard.API.Models
{
    public class ChartData
    {
        public List<string> Labels { get; set; } = new List<string>();
        public List<int> Values { get; set; } = new List<int>();
    }
}
