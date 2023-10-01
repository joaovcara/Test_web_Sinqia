using Domain.Interfaces;
using Domain.Models;
using Infrastructure.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PontoTuristicoController : Controller
    {
        private readonly IPontoTuristicoRepository _pontoTuristicoRepository;

        public PontoTuristicoController(IPontoTuristicoRepository pontoTuristicoRepository)
        {
            _pontoTuristicoRepository = pontoTuristicoRepository;
        }

        [HttpGet]
        [Route("GetAllPontoTuristico")]
        public async Task<IActionResult> GetAllPontoTuristico()
        {
            var result = await _pontoTuristicoRepository.GetAll();
            return Ok(result);
        }

        [HttpGet]
        [Route("GetPontoTuristicoById")]
        public async Task<IActionResult> GetPontoTuristicoById(int id)
        {
            var result = await _pontoTuristicoRepository.GetByid(id);
            return Ok(result);
        }

        [HttpPost]
        [Route("InsertPontoTuristico")]
        public async Task<IActionResult> InsertPontoTuristico(PontoTuristico pontoTuristico)
        {
            int result = await _pontoTuristicoRepository.Insert(pontoTuristico);
            return Ok(result);
        }

        [HttpPut]
        [Route("UpdatePontoTuristico")]
        public async Task<IActionResult> UpdatePontoTuristico(PontoTuristico pontoTuristico)
        {
            int result = await _pontoTuristicoRepository.Update(pontoTuristico);
            return Ok(result);
        }

        [HttpDelete]
        [Route("DeletePontoTuristico")]
        public async Task<IActionResult> DeletePontoTuristico(int id)
        {
            int result = await _pontoTuristicoRepository.Delete(id);
            return Ok(result);
        }
    }
}
