import { axiosService } from "../../axios";

export function getProduct() {
    return axiosService.get('/goods/select?page=1&pageSize=12')
}
export function searchGood(name:string){
    return axiosService.get('/goods/select?page=1&pageSize=12&name='+name)
}
export function searchGoodByClass(categoryId:string){
    categoryId = (categoryId=='全部'?'':`&category=${categoryId}`)
    return axiosService.get('/goods/selectByCategory?page=1&pageSize=12'+categoryId)
}
export function getClass(){
    return axiosService.get('/goods/getClassList')
}
export function addProduct(from:any){
    return axiosService.post("/goods/add",from)
}
export function changeProduct(from:any){
    return axiosService.post("/goods/update",from)
}
export function getGoodById(id:string){
    return axiosService.get(`/goods/getGoodById?id=${id}`)
}