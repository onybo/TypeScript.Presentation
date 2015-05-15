using System;
using System.Configuration;
using System.IO;
using System.Text;
using Serilog;
using Serilog.Enrichers;
using Serilog.Extras.Web;
using Serilog.Extras.Web.Enrichers;

namespace Web.Infrastructure
{
    public class LogConfig
    {
        public static StringBuilder Logs = new StringBuilder();
        public static void ConfigureLogging()
        {
            Serilog.Debugging.SelfLog.Out = new StringWriter(Logs);

            ApplicationLifecycleModule.IsEnabled = false; // Disable logging of all requests
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .Enrich.FromLogContext()
                .Enrich.With<MachineNameEnricher>()
                .Enrich.With<ProcessIdEnricher>()
                .Enrich.With<ThreadIdEnricher>()
                .Enrich.WithProperty("Environment", ConfigurationManager.AppSettings.Get("Global.Environment.Name"))
                .WriteTo.Trace()
                .CreateLogger();
        }
    }
}