using Antidote.Dashboard.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Antidote.Dashboard.API.Repositories
{
    public interface IAnalysisRepository
    {
        Task CreateLogFileAsync(string analysisName, List<string> logs);

        Task<Analysis> GetAnalysisDataAsync();

        Task<List<string>> GetMachinesAsync();

        Task<string> GetScannerNameAsync(string analysisName);
    }
}