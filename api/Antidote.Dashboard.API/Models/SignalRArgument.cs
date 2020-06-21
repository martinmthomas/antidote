namespace Antidote.Dashboard.API.Models
{
    public class SignalRArgument<T>
    {
        public string Category { get; set; }

        public string Id { get; set; }

        public T Data { get; set; }
    }
}
