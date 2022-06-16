import axios from 'axios';
//console.log(process.env.NODE_ENV);
const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (path, options) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
export default httpRequest;
