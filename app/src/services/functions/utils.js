import axios from 'axios'

/**
 * Busca as cidades de acordo com estado selecionado
 * @param {string} estado
 */
export function getCidades (estado) {
  if(estado === "")
    return Promise.resolve([]);

  const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + estado + '/municipios';

  return axios.get(url)
    .then((response) => {
      return response.data;  
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
}
