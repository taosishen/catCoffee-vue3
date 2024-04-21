import axios from "axios";
import { useLoading } from "../store/loadingStore";
import pinia from "../store/store";
const loadingStore = useLoading(pinia);
import { message } from "ant-design-vue";

export const axiosService = axios.create({
    baseURL: '/api', // 设置基础URL
    timeout: 10000 // 设置请求超时时间
})
// request.js
axiosService.interceptors.request.use(
    function (config) {
        // 此处添加Loading
        loadingStore.changeLoginStore(true);
        return config;
    },
    function (error) {
        loadingStore.changeLoginStore(false);
        return Promise.reject(error);
    }
);
axiosService.interceptors.response.use(
    function (res: any) {
        // console.log(res);
        loadingStore.changeLoginStore(false);
        return res.data; //这里必须返回 response，否则报错
    }, function (error) {
        let txt = `端口状态：${error.response.status}\n错误信息:${error.message}`;
        loadingStore.changeLoginStore(false);
        message.error(txt);
        console.log(error);
    }
)