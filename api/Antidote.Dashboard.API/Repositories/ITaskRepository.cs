using Antidote.Dashboard.API.Models.TaskAggregate;
using System.Collections.Generic;

namespace Antidote.Dashboard.API.Repositories
{
    public interface ITaskRepository
    {
        void ResetStatus();
        TaskStatusEnum GetStatus();
        void SetStatus(TaskStatusEnum status, string description);
        IList<AnalysisItem> GetAnalyses();
    }
}
