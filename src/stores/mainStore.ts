import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export interface MainStore {
    timeFormat: Ref<string>
    manualDate: Ref<number>
    data: Ref<object>
    showOrderDetails: Ref<number>
    language: Ref<string>
    changeTimeFormat: (format: string) => void
    setTimeFormat: (format: string) => void
    setManualDate: (newData: number) => void
    setData: (data: object) => void
    setShowOrdersDetails: (newData: number) => void
    setLanguage: (newLang: string) => void
}

export const useMainStore = defineStore('mainStore', () => {
    const timeFormat: Ref<string> = ref('en-GB')
    const manualDate: Ref<number> = ref(0)
    const data: Ref<object> = ref({})
    const showOrderDetails: Ref<number> = ref(0)
    const language: Ref<string> = ref('')

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

    function setData(newData: object) {
        data.value = newData
    }

    function setShowOrdersDetails(newValue: number) {
        showOrderDetails.value = newValue
    }
    function setLanguage(newLang: string) {
        language.value = newLang
        localStorage.setItem('language', newLang)
    }

    return {
        timeFormat,
        manualDate,
        data,
        showOrderDetails,
        language,
        changeTimeFormat,
        setTimeFormat,
        setManualDate,
        setData,
        setShowOrdersDetails,
        setLanguage
    } as MainStore
})
