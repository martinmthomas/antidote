using Antidote.Dashboard.API.Models;
using Antidote.Dashboard.API.Models.ScriptAggregate;
using Antidote.Dashboard.API.Models.TaskAggregate;
using Antidote.Dashboard.API.Repositories;
using Antidote.Dashboard.API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;

namespace Antidote.Dashboard.API.Controllers
{
    [ApiController]
    [Route("api/task")]
    public class TaskController : ControllerBase
    {
        private readonly ILogger<TaskController> _logger;
        private readonly IConfiguration _configuration;
        private readonly ITaskRepository _taskRepository;
        private readonly IScriptService _scriptService;

        public TaskController(ILogger<TaskController> logger,
            IConfiguration configuration,
            ITaskRepository taskRepository,
            IScriptService scriptService)
        {
            _logger = logger;
            _configuration = configuration;
            _taskRepository = taskRepository;
            _scriptService = scriptService;
        }

        [HttpGet]
        [Route("status")]
        public IActionResult GetStatus()
        {
            try
            {
                return new OkObjectResult(_taskRepository.GetStatus());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Getting Status failed");
            }

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }

        [HttpGet]
        [Route("analyses")]
        public IActionResult GetAnalyses()
        {
            try
            {
                var analyses = _taskRepository.GetAnalyses();
                return new OkObjectResult(analyses);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Getting Analyses failed");
            }

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }

        [HttpPost]
        [Route("CleanState")]
        public IActionResult RestoreCleanState()
        {
            try
            {
                _taskRepository.ResetStatus(); // reset to ensure last analysis' data is removed

                _taskRepository.SetStatus(TaskStatusEnum.CleanStateStarted, "Restoring system to Clean State started");

                var ctrlScriptOptions = _configuration.GetSection("ControlScriptOptions").Get<ScriptOptions>();
                var script = new ControlScript(ctrlScriptOptions);
                _scriptService.Execute(script);

                _taskRepository.SetStatus(TaskStatusEnum.CleanStateCompleted, "Restoring system to Clean State completed");

                return new OkResult();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Restoring to Clean State failed");
            }

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }

        [HttpPost]
        [Route("Virus")]
        public IActionResult UploadVirus([FromQuery] string fileName)
        {
            try
            {
                _taskRepository.SetStatus(TaskStatusEnum.AnalysisStarted, $"Analysis of {fileName} started");

                var tskScriptOptions = _configuration.GetSection("TskScriptOptions").Get<ScriptOptions>();
                var script = new TskScript(tskScriptOptions);
                _scriptService.Execute(script);

                _taskRepository.SetStatus(TaskStatusEnum.AnalysisCompleted, $"Analysis of {fileName} completed");

                return new OkResult();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Analysis of {fileName} failed");
            }

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }

        [HttpGet]
        [Route("chartData")]
        public IActionResult GetChartData()
        {
            return new OkObjectResult(new ChartData()
            {
                Labels = { "New Files", "Registry Edits", "File Edits" },
                Values = { 100, 600, 300 }
            });
        }

        [HttpPost]
        [Route("Antidote")]
        public IActionResult CreateAntidote()
        {
            try
            {
                _taskRepository.SetStatus(TaskStatusEnum.AntidoteGenStarted, $"Antidote generation started");

                var antidoteScriptOptions = _configuration.GetSection("AntidoteScriptOptions").Get<ScriptOptions>();
                var script = new AntidoteScriptOptions(antidoteScriptOptions);
                _scriptService.Execute(script);

                _taskRepository.SetStatus(TaskStatusEnum.AntidoteGenCompleted, $"Antidote generation completed");

                return new OkResult();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Antidote generation failed");
            }

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }
    }
}
