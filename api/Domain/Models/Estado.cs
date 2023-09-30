using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Estado : Generic
    {
        [Display(Name = "Sigla")]
        public string Sigla { get; set; }

        [Display(Name = "Descrição")]
        public string Descricao { get; set; }
    }
}