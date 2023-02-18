import axios from "axios";



const axiosClient = axios.create({
    baseURL: 'https://e-learning-976fe-default-rtdb.asia-southeast1.firebasedatabase.app/',
    headers: { 'Content-Type': 'application/json' },
});
export default axiosClient;
