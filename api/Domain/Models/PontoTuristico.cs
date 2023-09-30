using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class PontoTuristico : Generic
    {
        [Display(Name = "Nome")]
        public string Name { get; set; }

        [Display(Name = "Descrição")]
        public string Description { get; set; }

        [Display(Name = "Localização")]
        public string Location { get; set; }

        [Display(Name = "CIdade")]
        public string Cidade { get; set; }

        public int IdEstado { get; set; }
    }
}