using Antidote.Dashboard.API.Models.ScriptAggregate;
using System.Threading.Tasks;

namespace Antidote.Dashboard.API.Services
{
    public interface IScriptService
    {
        Task ExecuteAsync(Script script);
    }
}
