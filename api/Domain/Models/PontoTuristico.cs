using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class PontoTuristico : Base
    {
        [Display(Name = "Nome")]
        public string? Nome { get; set; }

        [Display(Name = "Descrição")]
        public string? Descricao { get; set; }

        [Display(Name = "Localização")]
        public string? Localizacao { get; set; }

        [Display(Name = "CIdade")]
        public string? Cidade { get; set; }

        public int IdEstado { get; set; }
    }
}