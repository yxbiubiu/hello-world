import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
    const isCollapse = ref(true)
    function change() {
        isCollapse.value = !isCollapse.value
    }

    return { isCollapse, change }
})