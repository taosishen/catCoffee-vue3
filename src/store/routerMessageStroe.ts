import { defineStore } from "pinia";
import {router} from'../router'
export const useRouterMessage = defineStore('routerMsg',{
    state(){
        return{
            routerPath:'/Product',
            routerName:'产品管理'
        }
    },
    actions:{
        /* 动作跳转路由 */
        pushRuter(value:string){
            this.$state.routerPath=value;
            router.push(value);
        }
    }
})