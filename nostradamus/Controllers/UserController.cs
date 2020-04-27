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
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        // GET: api/User
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/User/GetUser
        [Route("GetUser/{query}")]
        [HttpGet("{query}", Name = "GetUser")]
        public List<Models.Users> GetUser(string query)
        {
            using (var context = new Models.nostradamusContext())
            {
                var user = context.Users
                                .Where(s => s.FirstName == query).ToList();
                return user;
            }
        }
    }
}
