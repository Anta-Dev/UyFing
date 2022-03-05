using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UyFing.REST.Models
{
    public class Comment
    {
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public List<Comment> Answers { get; set; }
    }
}
