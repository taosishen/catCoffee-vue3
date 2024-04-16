import axios from "axios";
import { useLogin } from "../store/loadingStore";
import pinia from "../store/store";
const loadingStore = useLogin(pinia);

export const axiosService = axios.create({
    baseURL: '/api', // 设置基础URL
    timeout: 10000 // 设置请求超时时间
})
// request.js
axiosService.interceptors.request.use(
    (config) => {
        // 此处添加Loading
        loadingStore.changeLoginStore(true);
        console.log(loadingStore.isLoading);
        return config;
    },
    (error) => {
        loadingStore.changeLoginStore(false);
        return error;
    }
);
axiosService.interceptors.response.use(
    function (res:any) {
        if (res.status == 500) {
            console.log("服务器出现错误");
            loadingStore.changeLoginStore(false);
            return JSON.parse(res)
        }else{
            loadingStore.changeLoginStore(false);
            return res.data; //这里必须返回 response，否则报错
        }
    }
)