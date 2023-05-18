import axios, { AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: "https://64103182e1212d9cc92c334f.mockapi.io/api/gym", 
});

export default instance;