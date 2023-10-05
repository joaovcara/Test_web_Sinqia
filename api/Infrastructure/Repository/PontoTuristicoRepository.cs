using Dapper;
using Domain.Interfaces;
using Domain.Models;
using Infrastructure.Context;

namespace Infrastructure.Repository
{
    public class PontoTuristicoRepository : IPontoTuristicoRepository
    {
        private DBSession _dbSession;
        public const string Entidade = "dbo.PontoTuristico";

        public PontoTuristicoRepository(DBSession dbSession)
        {
            _dbSession = dbSession;
        }

        public async Task<int> Insert(PontoTuristico obj)
        {
            obj.DataInclusao = DateTime.Now;

            using (var conn = _dbSession.Connection)
            {
                string sql = $@"INSERT INTO {Entidade} (Nome, Descricao, Localizacao, Cidade, DataInclusao, IdEstado) 
                                OUTPUT INSERTED.Id
                                VALUES (@Nome, @Descricao, @Localizacao, @Cidade, @DataInclusao, @IdEstado) ";
                int result = await conn.ExecuteScalarAsync<int>(sql, obj);
                return result;
            }
        }

        public async Task<int> Update(PontoTuristico obj)
        {
            using (var conn = _dbSession.Connection)
            {
                string sql = $@"UPDATE {Entidade} 
                                SET Nome = @Nome, Descricao = @Descricao, Localizacao = @Localizacao, Cidade = @Cidade, DataInclusao = @DataInclusao IdEstado = @IdEstado 
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
                int result = await conn.ExecuteAsync(sql, new { id });
                return result;
            }
        }

        public async Task<PontoTuristico> GetByid(int id)
        {
            using (var conn = _dbSession.Connection)
            {
                string sql = $@"SELECT Id, Nome, Descricao, Localizacao, Cidade, DataInclusao, IdEstado  FROM {Entidade} WHERE Id = @Id";
                PontoTuristico pontoTuristico = await conn.QueryFirstOrDefaultAsync<PontoTuristico>(sql, new { id });
                return pontoTuristico;
            }
        }

        public async Task<List<PontoTuristico>> GetAll()
        {
            using (var conn = _dbSession.Connection)
            {
                string sql = $@"SELECT Id, Nome, Descricao, Localizacao, Cidade, DataInclusao, IdEstado FROM {Entidade}";
                List<PontoTuristico> pontoTuristico = (await conn.QueryAsync<PontoTuristico>(sql)).ToList();
                return pontoTuristico;
            }
        }
    }
}
