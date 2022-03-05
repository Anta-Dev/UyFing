using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UyFing.REST.Models
{
    public class UserVideo
    {
        public ApplicationUser User { get; set; }
        public Channel  Channel { get; set; }
        public List<Comment> Comments { get; set; }
        public int Ratings { get; set; }
    }
}
