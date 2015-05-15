using System.Security.Cryptography;
using System.Web.Http;
using AutoMapper;
using Web.Models;
using Web.Services;
using Serilog;

namespace Web.Api
{
    [RoutePrefix("api/Item")]
    public class ItemController : ApiController
    {
        private readonly ItemService _itemService;

        public ItemController(ItemService itemService, ILogger logger)
        {
            _itemService = itemService;
            Logger = logger;
        }

        [Route("{itemNumber}")]
        public IHttpActionResult Get(string itemNumber)
        {
            Logger.Debug("Getting item for " + itemNumber);

            var result = Mapper.Map<Item>(_itemService.GetByItemNumber(itemNumber));
            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [Route("{itemNumber}")]
        public IHttpActionResult Post(string itemNumber, Item item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var existing = _itemService.GetByItemNumber(itemNumber);
            if (existing == null)
            {
                return NotFound();
            }

            _itemService.Update(Mapper.Map<Web.Services.Models.Item>(item));

            return Ok(existing);
        }

        private ILogger _logger = null;
        public ILogger Logger
        {
            get
            {
                return _logger;
            }
            set
            {
                _logger = value;
            }
        }
    }
}
