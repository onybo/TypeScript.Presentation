using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Services
{
    public class ItemService
    {
        public Models.Item GetByItemNumber(string itemNumber)
        {
            return new Models.Item
            {
                ItemNumber = itemNumber,
                LastSaved = DateTime.Now,
                Created = DateTime.Now.AddDays(-2),
                Name = "Ole Olsen",
                SocialSecurityNumber = "0408702345",
                Occupation = "Developer",
                Nationality = new KeyValuePair<string, string>("Norway", "045"),
                City = new KeyValuePair<string, string>("Tromsø", "006"),
                Country = new KeyValuePair<string, string>("Afganistan", "004"),
                Description = "sdlkjf laskdjf lsjdf",
                EmployerName = "Novanet",
                EmployerAddress = "Arbeidersamfunnets plass 1",
            };
        }

        internal Models.Item Update(Models.Item item)
        {
            item.LastSaved = DateTime.Now;
            return item;
        }
    }
}