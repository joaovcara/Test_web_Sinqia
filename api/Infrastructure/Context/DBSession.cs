using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
