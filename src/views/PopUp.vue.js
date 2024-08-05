import { defineEmits } from 'vue';
const { defineProps, defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits(['closePopup']);
const closeCurrentPopup = (event) => {
    emit('closePopup');
};
const checkClickOutside = (event) => {
    const popupContent = document.querySelector('[data-popup-content]');
    if (popupContent && !popupContent.contains(event.target)) {
        closeCurrentPopup();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.checkClickOutside) }, ...{ class: ("popup_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("popup_content") }, "data-popup-content": ((true)), });
    var __VLS_0 = {};
    // @ts-ignore
    [checkClickOutside,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeCurrentPopup) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/close.webp"), alt: (""), });
    // @ts-ignore
    [closeCurrentPopup,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['popup_wrapper'];
        __VLS_styleScopedClasses['popup_content'];
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
                closeCurrentPopup: closeCurrentPopup,
                checkClickOutside: checkClickOutside,
            };
        },
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
        };
    },
});
export default {};
;
