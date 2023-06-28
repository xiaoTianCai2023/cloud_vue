import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useNewCommon  = defineStore('new_common', {
    state: () => {
        return {
            is_show_page: false
        }
    },
    getters: {

    }
})