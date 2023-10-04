using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Infrastructure.Context
{
    /// <summary>
    /// Classe responsável por gerenciar as conexões com Banco
    /// </summary>
    public class DBSession : IDisposable
    {
        public IDbConnection Connection { get; }

        public DBSession(IConfiguration configuration)
        {
            Connection = new SqlConnection(configuration.GetConnectionString("TestSinqia"));
            Connection.Open();
        }

        public void Dispose() => Connection?.Dispose();
    }
}
