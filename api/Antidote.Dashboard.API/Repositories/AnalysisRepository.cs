using Antidote.Dashboard.API.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Antidote.Dashboard.API.Repositories
{
    public class AnalysisRepository : IAnalysisRepository
    {
        private readonly IConfiguration _configuration;

        private string AnalysisFolder => _configuration.GetSection("AnalysisDataOptions").GetValue<string>("DownloadFolder");

        private int WaitTimeInMs => _configuration.GetSection("AnalysisDataOptions").GetValue<int>("WaitTimeInMs");

        private const int WaitIntervalInMs = 3000;

        public AnalysisRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<List<AnalysisItem>> GetAnalysisDataAsync(bool loadLatest)
        {
            var files = new DirectoryInfo(AnalysisFolder).GetFiles();
            if (files == null || files.Count() == 0)
                return null;

            FileInfo analysisFileInfo = null;

            if (!loadLatest)
            {
                // Check for file that is created as recent as one minute ago. This way we can ignore any older files 
                // created before the current analysis
                analysisFileInfo = await ExecuteUntilTimeElapsesAsync(
                    async () => files
                            .Where(file => file.LastWriteTime >= DateTime.Now.AddMinutes(-1))
                            .FirstOrDefault(),
                    WaitTimeInMs,
                    WaitIntervalInMs
                );
            }

            if (analysisFileInfo == null)
            {
                // If no file is created in the last one minute, then simply pick the last written file. This is to 
                // ensure that if for whatever reason file creation took longer than a minute, then we still pick the 
                // recent file. User can decide from UI if the file picked here is the correct one or not
                analysisFileInfo = files
                    .OrderByDescending(f => f.LastWriteTime)
                    .FirstOrDefault();
            }

            List<AnalysisItem> analysisData = await ExecuteUntilTimeElapsesAsync
                (
                async () => await GetAnalysisItemsAsync(analysisFileInfo.FullName),
                WaitTimeInMs,
                WaitIntervalInMs
                );

            return analysisData;
        }

        /// <summary>
        /// Executes the given function until it returns a non null value or the allocated time elapses
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="funcToExecAsync"></param>
        /// <param name="remainingTimeInMs"></param>
        /// <param name="waitIntervalInMs"></param>
        /// <returns></returns>
        private async Task<T> ExecuteUntilTimeElapsesAsync<T>(Func<Task<T>> funcToExecAsync, int remainingTimeInMs, int waitIntervalInMs)
        {
            while (remainingTimeInMs >= 0)
            {
                try
                {
                    var result = await funcToExecAsync();

                    if (result != null)
                        return result;
                }
                catch (Exception ex) { }

                //wait for a few secs before executing the function again
                await Task.Delay(waitIntervalInMs);
                remainingTimeInMs -= waitIntervalInMs;
            }

            return default(T);
        }

        /// <summary>
        /// Reads analysis file and converts the content of the file in to a list of AnalysisItems.
        /// </summary>
        /// <param name="filePath"></param>
        /// <returns></returns>
        private async Task<List<AnalysisItem>> GetAnalysisItemsAsync(string filePath)
        {
            var analysisItems = new List<AnalysisItem>();
            using var fileStream = new FileStream(filePath, FileMode.Open);
            using var fileReader = new StreamReader(fileStream);

            var lineItem = await fileReader.ReadLineAsync(); // First line can be ignored.
            lineItem = await fileReader.ReadLineAsync();
            while (lineItem != null)
            {
                var fieldValues = lineItem.Split(',');
                var analysisItem = new AnalysisItem()
                {
                    Key = fieldValues[0],
                    Data = fieldValues
                        .Where((field, index) => index != 0)
                        .ToList()
                };

                analysisItems.Add(analysisItem);
                lineItem = await fileReader.ReadLineAsync();
            }

            return analysisItems.Count > 0 ? analysisItems : null;
        }
    }
}
