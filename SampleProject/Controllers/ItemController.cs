using System.Web.Mvc;

namespace Web.Controllers
{
    public class ItemController : Controller
    {
        public ActionResult Index(string id)
        {
            if (!ValidateNumber(id))
            {
                ModelState.AddModelError("ItemNumberError", "ItemNumber argument should be a number: " + id);
            }

            return View((object)id);
        }

        private bool ValidateNumber(string number)
        {
            if (string.IsNullOrWhiteSpace(number))
                return false;
            int test;
            return int.TryParse(number, out test);
        }
    }
}