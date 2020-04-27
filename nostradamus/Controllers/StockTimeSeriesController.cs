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
    public class StockTimeSeriesController : ControllerBase
    {
        string baseUrl = "https://www.alphavantage.co/query?apikey=01GUORIBUQ8FLF7B&";
        // GET: api/StockTimeSeries
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/StockTimeSeries/IBM
        [HttpGet("{ticker}", Name = "GetStockTimeSeries")]
        public async Task<string> GetStockTimeSeries(string ticker)
        {
            using (HttpClient client = new HttpClient())
            {
                return await client.GetStringAsync(baseUrl + "function=TIME_SERIES_WEEKLY&symbol=" + ticker);
            }
        }

    }
}
