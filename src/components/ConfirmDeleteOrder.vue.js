import { defineEmits, defineProps } from 'vue';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { deleteOrderData } = defineProps(['deleteOrderData']);
const emit = defineEmits(['confirm', 'close']);
// Тут должна быть логика с отправкой метода делит на сервер с данными о приходе для удаления, после чего емитом попап можно закрыть.
const confirm = (event) => {
    emit('confirm');
};
const close = (event) => {
    emit('close');
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ['deleteOrderData'],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("confirm_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.$t('orders.delete_popup.title'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("data_to_delete") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("order_title") }, });
    (__VLS_ctx.deleteOrderData.title);
    // @ts-ignore
    [deleteOrderData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("order_date") }, });
    (__VLS_ctx.deleteOrderData.date);
    // @ts-ignore
    [deleteOrderData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("confirm_block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.close) }, ...{ class: ("cancel") }, });
    (__VLS_ctx.$t('orders.delete_popup.cancel_btn'));
    // @ts-ignore
    [$t, close,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.confirm) }, ...{ class: ("confirm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/delete.webp"), alt: (""), });
    // @ts-ignore
    [confirm,];
    (__VLS_ctx.$t('orders.delete_popup.confirm_btn'));
    // @ts-ignore
    [$t,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['confirm_wrapper'];
        __VLS_styleScopedClasses['text_wrapper'];
        __VLS_styleScopedClasses['data_to_delete'];
        __VLS_styleScopedClasses['order_title'];
        __VLS_styleScopedClasses['order_date'];
        __VLS_styleScopedClasses['confirm_block'];
        __VLS_styleScopedClasses['cancel'];
        __VLS_styleScopedClasses['confirm'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional({ deleteOrderData }),
                ...{ deleteOrderData },
                $emit: emit,
                deleteOrderData: deleteOrderData,
                confirm: confirm,
                close: close,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional({ deleteOrderData }),
            ...{ deleteOrderData },
            $emit: emit,
        };
    },
});
;
