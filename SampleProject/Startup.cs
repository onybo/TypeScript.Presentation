﻿using System.Reflection;
﻿using AutoMapper;
﻿using FluentValidation.WebApi;
﻿using Newtonsoft.Json;
﻿using Newtonsoft.Json.Serialization;
﻿using Owin;
using System.Web.Http;
﻿using Web.Infrastructure;

namespace Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder builder)
        {
            var config = new HttpConfiguration();

            
            config.MapHttpAttributeRoutes();

            ConfigureJsonFormatting(config);

            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile(new ItemProfile());
            });
            builder.UseWebApi(config);

            new Bootstrapper(config).CreateAndConfigureContainer(Assembly.GetExecutingAssembly());
        }

        private void ConfigureJsonFormatting(HttpConfiguration config)
        {
            var settings = config.Formatters.JsonFormatter.SerializerSettings;
            settings.Formatting = Formatting.Indented;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}