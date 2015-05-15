using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Web.Api
{
    [RoutePrefix("api/lists")]
    public class ListsController : ApiController
    {
        private IEnumerable<KeyValuePair<string, string>> Cities()
        {
            return new[]
            {
                new KeyValuePair<string, string>("Oslo", "001"),
                new KeyValuePair<string, string>("Drammen", "002"),
                new KeyValuePair<string, string>("Sarpsborg", "003"),
                new KeyValuePair<string, string>("Halden", "004"),
                new KeyValuePair<string, string>("Bergen", "005"),
                new KeyValuePair<string, string>("Tromsø", "006"),
                new KeyValuePair<string, string>("Harstad", "007")
            };
        }

        [Route("City")]
        public IHttpActionResult GetCities()
        {
            return Ok(Cities());
        }

        private IEnumerable<KeyValuePair<string, string>> Countries()
        {
            return new[]
            {
                new KeyValuePair<string, string>("Afganistan", "004"),
                new KeyValuePair<string, string>("Albania", "008"),
                new KeyValuePair<string, string>("Antarktis", "010"),
                new KeyValuePair<string, string>("Algeria", "012"),
                new KeyValuePair<string, string>("Amerikan Samoa", "016"),
                new KeyValuePair<string, string>("Andorra", "020"),
                new KeyValuePair<string, string>("Angola", "024"),
                new KeyValuePair<string, string>("Finland", "042"),
                new KeyValuePair<string, string>("Norway", "045")
            };
        }

        [Route("Country")]
        public IHttpActionResult GetCountries()
        {
            return Ok(Countries());
        }
    }
}
