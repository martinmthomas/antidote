using System;

namespace Antidote.Dashboard.API.Models.TaskAggregate
{
    public class AnalysisItem
    {
        public Guid Id { get; private set; }
        public DateTime Date { get; private set; }
        public string Description { get; private set; }

        public AnalysisItem(string description)
        {
            Id = Guid.NewGuid();
            Date = DateTime.Now;
            Description = description;
        }
    }
}
