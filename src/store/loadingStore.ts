import { defineStore } from "pinia";

export const useLoading = defineStore('login', {
    state() {
        return {
            isLoading:false
        }
    },
    actions:{
        changeLoginStore(value:boolean){
            this.isLoading = value
        }
    }
})