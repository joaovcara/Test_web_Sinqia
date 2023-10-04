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
        baseURL: "https://localhost:7007/api/" + controller + "/"
    });

    return axiosInstance;
};

export default api;
