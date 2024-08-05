import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useMainStore = defineStore('mainStore', () => {
    const timeFormat = ref('en-GB');
    const manualDate = ref(0);
    const data = ref({});
    const showOrderDetails = ref(0);
    const language = ref('');
    function changeTimeFormat(format) {
        timeFormat.value = format;
        localStorage.setItem('timeFormat', timeFormat.value);
    }
    function setTimeFormat(format) {
        timeFormat.value = format;
    }
    function setManualDate(newData) {
        manualDate.value = newData;
        localStorage.setItem('manualData', manualDate.value.toString());
    }
    function setData(newData) {
        data.value = newData;
    }
    function setShowOrdersDetails(newValue) {
        showOrderDetails.value = newValue;
    }
    function setLanguage(newLang) {
        language.value = newLang;
        localStorage.setItem('language', newLang);
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
    };
});
