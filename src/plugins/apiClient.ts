import axios from "axios";
import type { AxiosInstance } from "axios";


const apiClient: AxiosInstance = axios.create({
    // APIのURI
    baseURL: "http://localhost:5296",
    // リクエストヘッダ
    headers: {
        "Content-type": "application/json",
    },
});

export default apiClient;