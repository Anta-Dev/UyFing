using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace UyFing.REST.Utilities
{
    public class PaginationList<T>
    {
        public int PageIndex { get; private set; }
        public int PageSize { get; private set; }
        public int Count { get; private set; }

        public List<T> Items { get; private set; }

        public PaginationList(List<T> items, int count, int pageIndex, int pageSize)
        {
            PageIndex = pageIndex;
            Count = count;
            PageSize = pageSize;
            Items = items;
        }

        [JsonIgnore]
        public bool HasPreviousPage
        {
            get
            {
                return (PageIndex > 1);
            }
        }

        [JsonIgnore]
        public bool HasNextPage
        {
            get
            {
                return (PageIndex < TotalPages);
            }
        }

        [JsonIgnore]
        public int TotalPages
        {
            get
            {
                return (int)Math.Ceiling(Count / (double)PageSize);
            }
        }
    }
}
