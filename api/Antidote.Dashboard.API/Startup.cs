using Antidote.Dashboard.API.Repositories;
using Antidote.Dashboard.API.Services;
using Antidote.Dashboard.API.SignalrHub;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Antidote.Dashboard.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSignalR();
            services.AddControllers();

            services.AddMemoryCache();

            services.AddTransient<IScriptService, ScriptService>();

            services.AddSingleton<IAnalysisRepository, AnalysisRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            var appUrl = Configuration.GetSection("AppUrl").Get<string>();
            if (env.IsDevelopment())
                appUrl = "http://localhost:4200";

            app.UseCors(policy =>
            {
                policy.WithOrigins(appUrl);
                policy.AllowAnyMethod();
                policy.AllowAnyHeader();
                policy.AllowCredentials();
            });

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<AnalysisHub>("/signalr");
            });
        }
    }
}
