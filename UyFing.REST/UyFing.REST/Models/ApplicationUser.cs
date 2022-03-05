using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UyFing.REST.Models
{
    public class ApplicationUser
    {


        public DateTime Date { get; set; }
        public Channel Channel { get; set; }
        public List<Video> Videos { get; set; }
        public List<ApplicationUser> Following { get; set; }

    }
}
