using Domain.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstadoController : Controller
    {
        private readonly IEstadoRepository _estadoRepository;

        public EstadoController(IEstadoRepository estadoRepository)
        {
            _estadoRepository = estadoRepository;
        }

        [HttpGet]
        [Route("GetAllEstado")]
        public async Task<IActionResult> GetAllEstado()
        {
            var result = await _estadoRepository.GetAll();
            return Ok(result);
        }

        [HttpGet]
        [Route("GetEstadoById")]
        public async Task<IActionResult> GetEstadoById(int id)
        {
            var result = await _estadoRepository.GetByid(id);
            return Ok(result);
        }

        [HttpPost]
        [Route("InsertEstado")]
        public async Task<IActionResult> InsertEstado(Estado estado)
        {
            int result = await _estadoRepository.Insert(estado);
            return Ok(result);
        }

        [HttpPut]
        [Route("UpdateEstado")]
        public async Task<IActionResult> UpdateEstado(Estado estado)
        {
            int result = await _estadoRepository.Update(estado);
            return Ok(result);
        }

        [HttpDelete]
        [Route("DeleteEstado")]
        public async Task<IActionResult> DeleteEstado(int id)
        {
            int result = await _estadoRepository.Delete(id);
            return Ok(result);
        }
    }
}
