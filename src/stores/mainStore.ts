import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export interface MainStore {
    timeFormat: Ref<string>
    manualDate: Ref<number>
    changeTimeFormat: (format: string) => void
    setTimeFormat: (format: string) => void
    setManualDate: (newData: number) => void
}

export const useMainStore = defineStore('mainStore', () => {
    const timeFormat: Ref<string> = ref('en-GB')
    const manualDate: Ref<number> = ref(0)

    function changeTimeFormat(format: string) {
        timeFormat.value = format
        localStorage.setItem('timeFormat', timeFormat.value)
    }

    function setTimeFormat(format: string) {
        timeFormat.value = format
    }

    function setManualDate(newData: number) {
        manualDate.value = newData
        localStorage.setItem('manualData', manualDate.value.toString())
    }

    return {
        timeFormat,
        manualDate,
        changeTimeFormat,
        setTimeFormat,
        setManualDate
    } as MainStore
})
