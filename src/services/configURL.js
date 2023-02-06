import { Axios } from "axios";
import { userLocalService } from "./localStorage";



export const BASE_URL = "https://elearningnew.cybersoft.edu.vn";
export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNSIsIkhldEhhblN0cmluZyI6IjAxLzA2LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NTU3NzYwMDAwMCIsIm5iZiI6MTY2MjMxMDgwMCwiZXhwIjoxNjg1NzI1MjAwfQ.Dy6ptxrq8hSICX31ALneG5jR5A2yC8FKcoHtGfXpSi0";
export const createConfig = ()=>    {
    return{
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "bearer "+ userLocalService.get()?.accessToken,
    };
};
export const https = Axios.create({
    baseURL:BASE_URL,
    headers:createConfig(),
});