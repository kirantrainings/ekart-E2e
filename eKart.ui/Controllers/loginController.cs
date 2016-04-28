using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace nTechQuiz.Controllers
{
    public class LoginController : ApiController
    {
        public UserDetails LoginUser(Login login)
        {
            if(login.UserName=="kiran" && login.Password=="1234567890")
            {
                var userDetails = new UserDetails()
                {
                    UserName = login.UserName,
                    FirstName = "Kiran",
                    LastName = "PVS"
                };
                return userDetails;
            }
            return new UserDetails();
        }
    }
    public class Login
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class UserDetails
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}

