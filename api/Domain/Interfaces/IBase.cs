namespace Domain.Interfaces
{
    /// <summary>
    /// Interface Base de operações
    /// </summary>
    /// <typeparam name="T">Tipo do objeto</typeparam>
    public interface IBase<T> where T : class
    {
        Task<int> Insert(T obj);
        Task<int> Update(T obj);
        Task<int> Delete(int id);
        Task<List<T>> GetAll();
        Task<T> GetByid(int id);
    }
}
