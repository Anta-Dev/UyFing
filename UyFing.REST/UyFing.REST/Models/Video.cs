using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UyFing.REST.Models
{
    public class Video
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Time { get; set; }
        public string  Url { get; set; }
        public bool IsPublic { get; set; }
        public DateTime Date { get; set; }

        public Channel Channel { get; set; }

        public Category Category { get; set; }

        public List<UserVideo> UserVideos { get; set; }


        // Usuario?

    }
}
