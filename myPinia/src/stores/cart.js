import { defineStore } from 'pinia'
    export const userCart = defineStore("cart",{
        state: () => ({
            cartProducts: [],
        })
    
});