namespace Domain.Interfaces
{
    public interface IBase<T> where T : class
    {
        //Metodos da interface base
        Task Insert(T obj);
        Task Update(T obj);
        Task Delete(T obj);
        Task<IEnumerable<T>> GetAll();
        Task<T> GetByid(int id);
    }
}
