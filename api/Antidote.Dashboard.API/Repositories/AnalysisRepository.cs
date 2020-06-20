using Antidote.Dashboard.API.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Antidote.Dashboard.API.Repositories
{
    public class AnalysisRepository : IAnalysisRepository
    {
        private const string LOGFILESUFFIX = "_log.txt";
        private const string REPORTFILESUFFIX = "_analysis.log";

        private readonly IConfiguration _configuration;

        private string OutputFolder => _configuration.GetSection("OutputFolder").Get<string>();

        public AnalysisRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task CreateLogFileAsync(string analysisName, List<string> logs)
        {
            var fileName = analysisName + LOGFILESUFFIX;
            var fullPath = Path.Combine(OutputFolder, fileName);

            var logToWrite = logs.Aggregate((s1, s2) => s1 + Environment.NewLine + s2);

            using var stream = new StreamWriter(fullPath);
            await stream.WriteAsync(logToWrite);
        }

        public async Task<Analysis> GetAnalysisDataAsync()
        {
            var latestAnalysis = GetLatestAnalysisName();

            var report = await GetReportDataAsync(GetReportFilePath(latestAnalysis));

            var logs = await GetLogAsync(GetLogFilePath(latestAnalysis));

            return new Analysis
            {
                Name = latestAnalysis,
                Report = report,
                Logs = logs
            };
        }

        private string GetReportFilePath(string analysisName) => GetFilePath(analysisName + REPORTFILESUFFIX);

        private string GetLogFilePath(string analysisName) => GetFilePath(analysisName + LOGFILESUFFIX);

        private string GetFilePath(string fileName) => new DirectoryInfo(OutputFolder).GetFiles(fileName)[0].FullName;

        private string GetLatestAnalysisName()
        {
            var files = new DirectoryInfo(OutputFolder).GetFiles($"*{LOGFILESUFFIX}");
            if (files == null || files.Count() == 0)
                return null;

            return files
                .OrderByDescending(f => f.LastWriteTime)
                .Select(f => f.Name.Replace(LOGFILESUFFIX, "", StringComparison.OrdinalIgnoreCase))
                .FirstOrDefault();
        }

        /// <summary>
        /// Reads analysis file and converts the content of the file in to a list of AnalysisItems.
        /// </summary>
        /// <param name="filePath"></param>
        /// <returns></returns>
        private async Task<List<ReportItem>> GetReportDataAsync(string filePath)
        {
            var analysisItems = new List<ReportItem>();
            using var fileReader = new StreamReader(filePath);

            var lineItem = await fileReader.ReadLineAsync(); // First line can be ignored.
            lineItem = await fileReader.ReadLineAsync();
            while (lineItem != null)
            {
                var fieldValues = lineItem.Split(',');
                var analysisItem = new ReportItem()
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


        private async Task<List<string>> GetLogAsync(string filePath)
        {
            var logs = new List<string>();
            using var fileReader = new StreamReader(filePath);

            var lineItem = await fileReader.ReadLineAsync();
            while (lineItem != null)
            {
                logs.Add(lineItem);
                lineItem = await fileReader.ReadLineAsync();
            }

            return logs;
        }
    }
}
