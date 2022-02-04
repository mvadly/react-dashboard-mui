import axios from "axios";
import { expiredStorage } from "./expiredStorage";
const token = expiredStorage.getItem("token")


export const client = axios.create({
    baseURL: `${process.env.REACT_APP_APIURL}`,
    headers: {
        "Content-Type": "json"
    },
});

export const clientJwt = axios.create({
    baseURL: `${process.env.REACT_APP_APIURL}`,
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "json"
    },
});