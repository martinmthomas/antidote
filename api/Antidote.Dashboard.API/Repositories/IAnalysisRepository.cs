using Antidote.Dashboard.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Antidote.Dashboard.API.Repositories
{
    public interface IAnalysisRepository
    {
        Task<List<AnalysisItem>> GetAnalysisDataAsync(bool loadLatest);
    }
}