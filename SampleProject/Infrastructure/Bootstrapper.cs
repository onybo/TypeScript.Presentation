using System.Reflection;
using System.Web.Http;
using System.Web.Http.Dispatcher;
using System.Web.Mvc;
using FluentValidation.WebApi;
using Autofac;
using Autofac.Integration.WebApi;
using Autofac.Integration.Mvc;
using Serilog;

namespace Web.Infrastructure
{
    public class Bootstrapper 
    {
        private HttpConfiguration _config;

        public Bootstrapper(HttpConfiguration config)
        {
            _config = config;
        }

        public void CreateAndConfigureContainer(Assembly asm)
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            builder.RegisterApiControllers(asm);

            builder.RegisterAssemblyTypes(asm)
                .Where(t => t.Name.EndsWith("Service"))
                .AsSelf();

            LogConfig.ConfigureLogging();

            builder.Register<ILogger>((c, p) => Log.Logger).SingleInstance();
            var container = builder.Build();
            _config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            FluentValidationModelValidatorProvider.Configure(_config, provider => provider.ValidatorFactory = new AutofacValidatorFactory(container));
        }
    }
}