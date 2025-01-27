import axios from "axios";

export const req = axios.create({
    baseURL:"/api/",
});