using Antidote.Dashboard.API.Models.ScriptAggregate;
using Antidote.Dashboard.API.Repositories;
using Antidote.Dashboard.API.Services;
using Antidote.Dashboard.API.SignalrHub;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace Antidote.Dashboard.API.Controllers
{
    [ApiController]
    [Route("api/task")]
    public class TaskController : ControllerBase
    {
        private readonly ILogger<TaskController> _logger;
        private readonly IConfiguration _configuration;
        private readonly IScriptService _scriptService;
        private readonly IAnalysisRepository _analysisRepository;
        private readonly IHubContext<AnalysisHub> _hub;

        public TaskController(ILogger<TaskController> logger,
            IConfiguration configuration,
            IScriptService scriptService,
            IAnalysisRepository analysisRepository,
            IHubContext<AnalysisHub> hub)
        {
            _logger = logger;
            _configuration = configuration;
            _scriptService = scriptService;
            _analysisRepository = analysisRepository;
            _hub = hub;
        }

        [HttpPost]
        [Route("analyses")]
        public async Task<IActionResult> CreateAnalysis([FromQuery] string fileName)
        {
            try
            {
                var analysisScriptOptions = _configuration.GetSection("AnalysisScriptOptions").Get<ScriptOptions>();
                var script = new AnalysisScript(analysisScriptOptions, fileName);

                await _scriptService.ExecuteAsync(script);

                return new OkResult();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Analysis of {fileName} failed");
            }

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }

        [HttpGet]
        [Route("analyses/latest")]
        public async Task<IActionResult> GetAnalyses()
        {
            try
            {
                var analysisData = await _analysisRepository.GetAnalysisDataAsync();
                return new OkObjectResult(analysisData);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Getting Analysis data failed");
            }

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }
    }
}
