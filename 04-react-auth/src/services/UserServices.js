import axios from 'axios';
const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1';

const RegisterUser = (data) => axios.post(`${BASE_URL}/signup`, data);

export { RegisterUser };
