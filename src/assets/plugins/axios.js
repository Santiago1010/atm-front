import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost/valtec/api/',
});

export default api;