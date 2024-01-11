using GamaTour.Data;
using GamaTour.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GamaTour.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GamaTourControllers : ControllerBase
    {
        private readonly DataContext _dataContext;

        public GamaTourControllers(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Destinations>>> GetDestinations()
        {
            return await _dataContext.GamaTour.ToListAsync();  
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Destinations>> GetDestinationsById(int id)
        {
            var destinations = await _dataContext.GamaTour.FindAsync(id);  
            if (destinations == null)
            {
                return NotFound();
            }

            return Ok(destinations);
        }
    }
}
