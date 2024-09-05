import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.mercadolibre.com/",
});

const listItems = {
  getItems: (query) => apiClient.get(`sites/MLA/search?q=${query}`),
};

const specificItem = {
  getItem: (id) => apiClient.get(`items/${id}`),
  getItemDescription: (id) => apiClient.get(`items/${id}/description`),
};

export default { listItems, specificItem };
