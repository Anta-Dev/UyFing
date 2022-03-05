using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UyFing.REST.Models
{
    public class Channel
    {
        public bool IsPublic { get; set; }
        public string  Description { get; set; }
        public string Name { get; set; }
        public Category Category { get; set; }
        public List<Video> Videos { get; set; }
    }
}
