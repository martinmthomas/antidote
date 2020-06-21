using Antidote.Dashboard.API.Models;
using Antidote.Dashboard.API.Models.ScriptAggregate;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Antidote.Dashboard.API.Services
{
    public interface IScriptService
    {
        Task<List<string>> ExecuteAsync(Script script, SignalRArgument<string> signalRArgument);
    }
}
