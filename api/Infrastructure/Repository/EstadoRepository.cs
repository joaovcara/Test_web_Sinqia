using Dapper;
using Domain.Interfaces;
using Domain.Models;
using Infrastructure.Context;

namespace Infrastructure.Repository
{
    public class EstadoRepository : IEstadoRepository
    {
        private DBSession _dbSession;
        public const string Entidade = "dbo.Estado";

        public EstadoRepository(DBSession dbSession)
        {
            _dbSession = dbSession;
        }

        public async Task<int> Insert(Estado obj)
        {
            using (var conn = _dbSession.Connection)
            {
                string sql = $@"INSERT INTO {Entidade} (Sigla, Descricao)
                                VALUES (@Sigla, @Descricao) ";
                int result = await conn.ExecuteAsync(sql, obj);
                return result;
            }
        }

        public async Task<int> Update(Estado obj)
        {
            using (var conn = _dbSession.Connection)
            {
                string sql = $@"UPDATE {Entidade} 
                                SET Sigla = @Sigla, Descricao = @Descricao 
                                WHERE Id = @Id";
                int result = await conn.ExecuteAsync(sql, obj);
                return result;
            }
        }

        public async Task<int> Delete(int id)
        {
            using (var conn = _dbSession.Connection)
            {
                string sql = $@"DELETE {Entidade} WHERE Id = @Id";
                int result = await conn.ExecuteAsync(sql, new {id});
                return result;
            }
        }

        public async Task<Estado> GetByid(int id)
        {
            using (var conn = _dbSession.Connection)
            {
                string sql = $@"SELECT * FROM {Entidade} WHERE Id = @Id";
                Estado estado = await conn.QueryFirstOrDefaultAsync<Estado>(sql, new { id });
                return estado;
            }
        }

        public async Task<List<Estado>> GetAll()
        {
            using (var conn = _dbSession.Connection) 
            {
                string sql = $@"SELECT * FROM {Entidade}";
                List<Estado> estados = (await conn.QueryAsync<Estado>(sql)).ToList();
                return estados;
            }
        }
    }
}
