using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;

namespace nostradamus.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        string baseUrl = "https://www.alphavantage.co/query?apikey=01GUORIBUQ8FLF7B&";
        // GET: api/Stock
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Stock/query
        [HttpGet("{query}", Name = "Get")]
        public async Task<string> Get(string query)
        {
            using (HttpClient client = new HttpClient())
            {
                return await client.GetStringAsync(baseUrl + query);
            }
        }


        // POST: api/Stock
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Stock/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
