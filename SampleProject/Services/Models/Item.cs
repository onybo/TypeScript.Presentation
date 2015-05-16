using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Services.Models
{
    public class Item
    {
        public string ItemNumber { get; set; }
        public DateTime LastSaved { get; set; }

        public DateTime Created { get; set; }
        public string Name { get; set; }
        public string SocialSecurityNumber { get; set; }
        public string Occupation { get; set; }
        public KeyValuePair<string, string> Nationality { get; set; }
        public KeyValuePair<string, string> City { get; set; }
        public KeyValuePair<string, string> Country { get; set; }
        public string Description { get; set; }
        public string EmployerName { get; set; }
        public string EmployerAddress { get; set; }
        public DateTime BirthDate { get; set; }
    }
}