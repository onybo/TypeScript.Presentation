using System.Collections.Generic;
using AutoMapper;
using Web.Models;

namespace Web.Infrastructure
{
    public class ItemProfile : Profile
    {
        protected override void Configure()
        {
            Mapper.CreateMap<Item, Services.Models.Item>();

            Mapper.CreateMap<Services.Models.Item, Item>();
        }
    }
}