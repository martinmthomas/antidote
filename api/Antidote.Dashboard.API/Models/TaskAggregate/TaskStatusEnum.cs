namespace Antidote.Dashboard.API.Models.TaskAggregate
{
    public enum TaskStatusEnum
    {
        None,
        CleanStateStarted,
        CleanStateCompleted,
        AnalysisStarted,
        AnalysisCompleted,
        AntidoteGenStarted,
        AntidoteGenCompleted
    }
}