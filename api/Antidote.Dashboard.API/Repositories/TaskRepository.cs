using Antidote.Dashboard.API.Models.TaskAggregate;
using Microsoft.Extensions.Caching.Memory;
using System.Collections.Generic;

namespace Antidote.Dashboard.API.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly IMemoryCache _memoryCache;
        private const string LOGS_CACHEKEY = "LOGS_CACHEKEY";
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
            _memoryCache.Set(LOGS_CACHEKEY, new List<LogItem>());
        }

        public void SetStatus(TaskStatusEnum status, string description)
        {
            _memoryCache.Set(STATUS_CACHEKEY, status);

            _memoryCache.TryGetValue<List<LogItem>>(LOGS_CACHEKEY, out var logs);
            if (logs == null)
                logs = new List<LogItem>();

            logs.Add(new LogItem(description));
            _memoryCache.Set(LOGS_CACHEKEY, logs);
        }

        public IList<LogItem> GetLogs()
        {
            _memoryCache.TryGetValue<List<LogItem>>(LOGS_CACHEKEY, out var logs);
            return logs;
        }
    }
}
