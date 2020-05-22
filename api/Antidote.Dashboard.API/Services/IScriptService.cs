using Antidote.Dashboard.API.Models.ScriptAggregate;

namespace Antidote.Dashboard.API.Services
{
    public interface IScriptService
    {
        public string Execute(Script script);
    }
}
