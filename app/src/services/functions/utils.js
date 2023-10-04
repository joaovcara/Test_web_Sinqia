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

/**
 * Função responsável por converter date time em date 
 * @param {Datetime} data 
 * @returns Data formata DD/MM/YYYY
 */
export function convertDatetimaAsDate(data){
  const dataObj = new Date(data);
  const dataApenasData = new Date(dataObj.getFullYear(), dataObj.getMonth(), dataObj.getDate());

  return dataApenasData.toISOString().split('T')[0];
}