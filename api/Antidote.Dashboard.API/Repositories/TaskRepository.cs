using Antidote.Dashboard.API.Models.TaskAggregate;
using Microsoft.Extensions.Caching.Memory;
using System.Collections.Generic;

namespace Antidote.Dashboard.API.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly IMemoryCache _memoryCache;
        private const string ANALYSES_CACHEKEY = "ANALYSES_CACHEKEY";
        private const string STATUS_CACHEKEY = "STATUS_CACHEKEY";

        public TaskRepository(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public TaskStatusEnum GetStatus()
        {
            return _memoryCache.GetOrCreate(STATUS_CACHEKEY, ce => TaskStatusEnum.None);
        }

        public void ResetStatus()
        {
            _memoryCache.Set(STATUS_CACHEKEY, TaskStatusEnum.None);
            _memoryCache.Set(ANALYSES_CACHEKEY, new List<AnalysisItem>());
        }

        public void SetStatus(TaskStatusEnum status, string description)
        {
            _memoryCache.Set(STATUS_CACHEKEY, status);

            _memoryCache.TryGetValue<List<AnalysisItem>>(ANALYSES_CACHEKEY, out var analyses);
            if (analyses == null)
                analyses = new List<AnalysisItem>();

            analyses.Add(new AnalysisItem(description));
            _memoryCache.Set(ANALYSES_CACHEKEY, analyses);
        }

        public IList<AnalysisItem> GetAnalyses()
        {
            _memoryCache.TryGetValue<List<AnalysisItem>>(ANALYSES_CACHEKEY, out var analyses);
            return analyses;
        }
    }
}
