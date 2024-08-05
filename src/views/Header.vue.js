import TimeAndDate from '../components/TimeAndDate.vue';
import { ref, onMounted } from 'vue';
import { useMainStore } from '../stores/mainStore.ts';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useMainStore();
const currentLang = ref('Ua');
const checkTimeFormat = () => {
    const currentFormat = localStorage.getItem('timeFormat');
    if (currentFormat) {
        store.setTimeFormat(currentFormat);
    }
};
const setLang = (lang) => {
    store.setLanguage(lang);
    currentLang.value = lang;
};
onMounted(checkTimeFormat);
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search_and_logo_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/chivas_logo.webp"), alt: (""), ...{ class: ("header_logo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), name: ("search"), id: ("search"), value: ((__VLS_ctx.searchTerm)), });
    // @ts-ignore
    [searchTerm,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("search"), ...{ class: ((__VLS_ctx.searchTerm.length >= 1 ? 'hide' : '')) }, });
    __VLS_styleScopedClasses = (searchTerm.length >= 1 ? 'hide' : '');
    (__VLS_ctx.$t('header.search_input'));
    // @ts-ignore
    [searchTerm, $t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lang_switch") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setLang('Ua');
                // @ts-ignore
                [setLang,];
            } }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("line_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("line") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['circle', __VLS_ctx.currentLang === 'Ua' ? 'Ua' : 'Ru'])) }, });
    __VLS_styleScopedClasses = (['circle', currentLang === 'Ua' ? 'Ua' : 'Ru']);
    (__VLS_ctx.currentLang);
    // @ts-ignore
    [currentLang, currentLang,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setLang('Ru');
                // @ts-ignore
                [setLang,];
            } }, });
    // @ts-ignore
    [TimeAndDate,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TimeAndDate, new TimeAndDate({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(TimeAndDate, __VLS_1));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['search_and_logo_wrapper'];
        __VLS_styleScopedClasses['header_logo'];
        __VLS_styleScopedClasses['input_wrapper'];
        __VLS_styleScopedClasses['lang_switch'];
        __VLS_styleScopedClasses['line_wrapper'];
        __VLS_styleScopedClasses['line'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                TimeAndDate: TimeAndDate,
                currentLang: currentLang,
                setLang: setLang,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
