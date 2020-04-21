using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Helpers;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {

        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;

        Task<User> GetUser(int id);
                Task<Photo> GetPhoto(int id);
                        Task<bool> SaveAll();
        Task<PagedList<User>> GetUsers(UserParams userParams);

        Task<Photo> GetMainPhotoForUser(int userId);
        Task<Like> GetLike(int userId, int recipientId);
        // Task<IEnumerable<int>> GetUserLikes(int id, bool likers);
    }
}