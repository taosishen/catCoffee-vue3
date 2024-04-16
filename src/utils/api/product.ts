import { axiosService } from "../../axios";

export function getProduct() {
    return axiosService.get('/goods/select?page=1&pageSize=12')
}