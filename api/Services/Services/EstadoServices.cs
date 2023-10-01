using Domain.Interfaces;
using Infrastructure.Context;
using Infrastructure.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services
{
    public class EstadoServices : EstadoRepository, IEstadoRepository
    {
        public EstadoServices(DBSession dbSession) : base(dbSession)
        {
        }
    }
}
