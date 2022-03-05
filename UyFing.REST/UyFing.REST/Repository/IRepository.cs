using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UyFing.REST.Utilities;

namespace UyFing.REST.Repository
{
    interface IRepository<T> where T : class
    {
        Task<PaginationList<T>> GetAllAsync(int page, int pageSize, object filters);
        Task<T> GetAsync(object id);
        Task<int> Add(T entity);
        Task<int> Update(T entity);
        Task<int> Delete(T entity);
        bool IsPresent(object id);
    }
}
