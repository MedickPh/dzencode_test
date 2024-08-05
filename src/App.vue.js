import { RouterView } from 'vue-router';
import { ref, onBeforeMount, onMounted, watch } from 'vue';
import Header from './views/Header.vue';
import SideBlock from './views/SideBlock.vue';
import Loader from './components/Loader.vue';
import { useMainStore } from './stores/mainStore.ts';
import { orders, products } from './data/app.js';
import { useI18n } from 'vue-i18n';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { t, locale } = useI18n({ useScope: 'global' });
const store = useMainStore();
const dataLoading = ref(true);
const getLang = () => {
    const newLang = localStorage.getItem('language');
    if (newLang === 'Ru' || newLang === 'Ua') {
        locale.value = newLang;
        store.setLanguage(newLang);
    }
};
// Имитация получения данных с сервера
const getData = () => {
    store.setData({ orders, products });
    setTimeout(() => {
        dataLoading.value = false;
    }, 2500);
};
onBeforeMount(getData);
onMounted(() => {
    getLang();
});
watch(() => store.language, (newVal) => {
    locale.value = newVal;
});
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
    // @ts-ignore
    const __VLS_0 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("loader"), }));
    const __VLS_2 = __VLS_1({ name: ("loader"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ name: ("loader"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    if (__VLS_ctx.dataLoading) {
        // @ts-ignore
        [Loader,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(Loader, new Loader({}));
        const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({}));
        const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Loader, __VLS_7));
        // @ts-ignore
        [dataLoading,];
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    // @ts-ignore
    [Header,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Header, new Header({}));
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({}({}));
    const __VLS_15 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Header, __VLS_12));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main_content_wrapper") }, });
    // @ts-ignore
    [SideBlock,];
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(SideBlock, new SideBlock({}));
    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
    ({}({}));
    const __VLS_20 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(SideBlock, __VLS_17));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main_content") }, });
    // @ts-ignore
    const __VLS_21 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ name: ("router"), }));
    const __VLS_23 = __VLS_22({ name: ("router"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    ({}({ name: ("router"), }));
    const __VLS_26 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23));
    // @ts-ignore
    const __VLS_27 = {}
        .RouterView;
    ({}.RouterView);
    __VLS_components.RouterView;
    // @ts-ignore
    [RouterView,];
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({}));
    const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
    ({}({}));
    const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29));
    __VLS_nonNullable(__VLS_26.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['main_content_wrapper'];
        __VLS_styleScopedClasses['main_content'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                RouterView: RouterView,
                Header: Header,
                SideBlock: SideBlock,
                Loader: Loader,
                dataLoading: dataLoading,
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
