using System;

namespace Antidote.Dashboard.API.Models.TaskAggregate
{
    public class LogItem
    {
        public Guid Id { get; private set; }
        public DateTime Date { get; private set; }
        public string Description { get; private set; }

        public LogItem(string description)
        {
            Id = Guid.NewGuid();
            Date = DateTime.Now;
            Description = description;
        }
    }
}
