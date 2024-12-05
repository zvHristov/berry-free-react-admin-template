import axios from 'axios';

const axiosServices = axios.create({ 
  
    baseURL: 'https://api.chucknorris.io/' ||
     'http://localhost:3056/v3/api/' });
// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosServices.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem('isAuthenticated');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosServices.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401 && !window.location.href.includes('/login')) {
            window.location.pathname = '/pages/login/login3';
        }
        return Promise.reject((error.response && error.response.data) || 'Wrong Services');
    }
);

export default axiosServices;