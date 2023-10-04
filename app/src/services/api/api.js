import axios from "axios";

/**
 * Intermédio de requisições na API para consumo de dados.
 * @param {string} controller - Nome do controlador para acesso.
 * @example
 * const API = api('Controller')
 * API.post('ActionController', data)
 * @returns Objeto de requisição axios.
 */
const api = (controller) => {
    let axiosInstance = axios.create({
        baseURL: "https://localhost:44332/api/" + controller + "/"
    });

    // Adicione um interceptador para lidar com erros de rede e HTTP.
    axiosInstance.interceptors.response.use(
        (response) => {
            // Retorna a resposta se tudo estiver OK.
            return response;
        },
        (error) => {
            // Trata erros de rede ou HTTP aqui.
            if (error.response) {
                // Erro HTTP (ex: 404, 500, etc.)
                const errorMessage = `Erro HTTP ${error.response.status}: ${error.response.data}`;
                alert(errorMessage); // Exibe a mensagem de erro em um alert.
            } else if (error.request) {
                // Erro de rede (não foi possível fazer a requisição).
                const errorMessage = `Erro de rede: ${error.message}, verifique a API`;
                alert(errorMessage); // Exibe a mensagem de erro em um alert.
            } else {
                // Erro desconhecido.
                const errorMessage = `Erro desconhecido: ${error.message}`;
                alert(errorMessage); // Exibe a mensagem de erro em um alert.
            }

            // Você pode lançar um erro personalizado aqui ou lidar com o erro de outra forma.
            // Por exemplo, retornar uma resposta de erro padrão.
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default api;
