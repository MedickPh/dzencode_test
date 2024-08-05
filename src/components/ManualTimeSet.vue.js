import { ref, defineEmits } from 'vue';
import { useMainStore } from '../stores/mainStore.ts';
import { checkPossibleDeviation } from '../methods/checkPossibleDeviation.js';
const { defineProps, defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const showFaq = ref(false);
const store = useMainStore();
const emit = defineEmits(['closePopup']);
const closeCurrentPopup = (event) => {
    emit('closePopup');
};
const newTime = ref();
const isError = ref(false);
const showError = () => {
    isError.value = true;
    showFaq.value = true;
    setTimeout(() => {
        isError.value = false;
        showFaq.value = false;
    }, 3000);
};
const checkTime = () => {
    if (!newTime.value) {
        showError();
        return;
    }
    const checkedTime = checkPossibleDeviation(newTime.value);
    if (checkedTime !== false) {
        store.setManualDate(checkedTime);
        closeCurrentPopup();
    }
    else {
        showError();
        return;
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("manual_time_set") }, });
    if (__VLS_ctx.showFaq) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("faq_block") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("bold") }, });
        (__VLS_ctx.$t('header.settings_popup.title'));
        // @ts-ignore
        [showFaq, $t,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.$t('header.settings_popup.text'));
        // @ts-ignore
        [$t,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onMouseover: (...[$event]) => {
                __VLS_ctx.showFaq = true;
                // @ts-ignore
                [showFaq,];
            } }, ...{ onMouseleave: (...[$event]) => {
                __VLS_ctx.showFaq = false;
                // @ts-ignore
                [showFaq,];
            } }, ...{ class: ("settings_btn") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/question.webp"), alt: ("Settings faq"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("time_format") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.store.changeTimeFormat('en-US');
                // @ts-ignore
                [store,];
            } }, ...{ class: (({ active: __VLS_ctx.store.timeFormat === 'en-US' })) }, });
    __VLS_styleScopedClasses = ({ active: store.timeFormat === 'en-US' });
    // @ts-ignore
    [store,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.store.changeTimeFormat('en-GB');
                // @ts-ignore
                [store,];
            } }, ...{ class: (({ active: __VLS_ctx.store.timeFormat === 'en-GB' })) }, });
    __VLS_styleScopedClasses = ({ active: store.timeFormat === 'en-GB' });
    // @ts-ignore
    [store,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("datetime-local"), name: ("setTime"), id: ("setTime"), ...{ class: ((__VLS_ctx.isError ? 'input_error' : '')) }, });
    (__VLS_ctx.newTime);
    __VLS_styleScopedClasses = (isError ? 'input_error' : '');
    // @ts-ignore
    [isError, newTime,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.checkTime();
                // @ts-ignore
                [checkTime,];
            } }, ...{ class: ("save_btn") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/square.webp"), alt: (""), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['manual_time_set'];
        __VLS_styleScopedClasses['faq_block'];
        __VLS_styleScopedClasses['bold'];
        __VLS_styleScopedClasses['settings_btn'];
        __VLS_styleScopedClasses['time_format'];
        __VLS_styleScopedClasses['save_btn'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $emit: emit,
                showFaq: showFaq,
                store: store,
                newTime: newTime,
                isError: isError,
                checkTime: checkTime,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
        };
    },
});
;
