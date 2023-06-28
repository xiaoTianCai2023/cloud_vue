import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useNewCommonStore  = defineStore('search', {
    state: () => {
        return {
            show_page: false
        }
    },
    getters: {

    }
})

