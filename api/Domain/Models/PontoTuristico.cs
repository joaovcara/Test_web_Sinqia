using System.ComponentModel.DataAnnotations;

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

        [Display(Name = "Cidade")]
        public string? Cidade { get; set; }

        [Display(Name = "Data Inclusão")]
        public DateTime? DataInclusao { get; set; }

        public int IdEstado { get; set; }
    }
}