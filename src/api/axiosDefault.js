import axios from "axios";

axios.defaults.baseURL = "https://moments-walkthrough-project-1-0ad7a24954c8.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();