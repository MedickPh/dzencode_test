import { ref, defineProps, onMounted, defineEmits } from 'vue';
import { useMainStore } from '../stores/mainStore.ts';
import SmallPopup from '../views/SmallPopup.vue';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits(['openPopup']);
const { orderDetails } = defineProps(['orderDetails']);
const store = useMainStore();
const showAddPopup = ref(false);
const openPopup = (order) => {
    emit('openPopup', {
        id: order.id,
        title: order.title,
        serialNumber: order.serialNumber,
        photo: order.photo,
        isNew: order.isNew
    });
};
const closeAddPopup = (event) => {
    showAddPopup.value = false;
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ['orderDetails'],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("details_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("title") }, });
    (__VLS_ctx.orderDetails.title);
    // @ts-ignore
    [orderDetails,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.showAddPopup = true;
                // @ts-ignore
                [showAddPopup,];
            } }, ...{ class: ("add_button_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("add_new_order_btn") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/add.webp"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('orders.details_add_btn.title'));
    // @ts-ignore
    [$t,];
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("show_add_popup"), }));
    const __VLS_2 = __VLS_1({ name: ("show_add_popup"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ name: ("show_add_popup"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    if (__VLS_ctx.showAddPopup) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("add_new_product_popup") }, });
        // @ts-ignore
        [SmallPopup, SmallPopup,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(SmallPopup, new SmallPopup({ ...{ 'onClosePopup': {} }, }));
        const __VLS_7 = __VLS_6({ ...{ 'onClosePopup': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{ 'onClosePopup': {} }, }));
        let __VLS_11;
        const __VLS_12 = {
            onClosePopup: (...[$event]) => {
                if (!((__VLS_ctx.showAddPopup)))
                    return;
                __VLS_ctx.closeAddPopup();
                // @ts-ignore
                [showAddPopup, closeAddPopup,];
            }
        };
        const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(SmallPopup, __VLS_7));
        let __VLS_8;
        let __VLS_9;
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.$t('orders.details_add_btn.text'));
        // @ts-ignore
        [$t,];
        __VLS_nonNullable(__VLS_10.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    for (const [order, index] of __VLS_getVForSourceType((__VLS_ctx.orderDetails.products))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("details") }, key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['product_indicator', order.isNew === 1 ? 'new' : 'old'])) }, });
        __VLS_styleScopedClasses = (['product_indicator', order.isNew === 1 ? 'new' : 'old']);
        // @ts-ignore
        [orderDetails,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_img") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((order.photo)), alt: (""), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_title_wrapper") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_title") }, });
        (order.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_serial_number") }, });
        (order.serialNumber);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_status") }, });
        if (order.isNew === 1) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("status_new") }, });
            (__VLS_ctx.$t('orders.product_type.new'));
            // @ts-ignore
            [$t,];
        }
        if (order.isNew !== 1) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("status_old") }, });
            (__VLS_ctx.$t('orders.product_type.old'));
            // @ts-ignore
            [$t,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.openPopup(order);
                    // @ts-ignore
                    [openPopup,];
                } }, ...{ class: ("delete_order") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/delete.webp"), alt: (""), });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.store.setShowOrdersDetails(0);
                // @ts-ignore
                [store,];
            } }, ...{ class: ("close_details") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/close.webp"), alt: (""), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['details_wrapper'];
        __VLS_styleScopedClasses['title_wrapper'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['add_button_wrapper'];
        __VLS_styleScopedClasses['add_new_order_btn'];
        __VLS_styleScopedClasses['add_new_product_popup'];
        __VLS_styleScopedClasses['details'];
        __VLS_styleScopedClasses['product_img'];
        __VLS_styleScopedClasses['product_title_wrapper'];
        __VLS_styleScopedClasses['product_title'];
        __VLS_styleScopedClasses['product_serial_number'];
        __VLS_styleScopedClasses['product_status'];
        __VLS_styleScopedClasses['status_new'];
        __VLS_styleScopedClasses['status_old'];
        __VLS_styleScopedClasses['delete_order'];
        __VLS_styleScopedClasses['close_details'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional({ orderDetails }),
                ...{ orderDetails },
                $emit: emit,
                SmallPopup: SmallPopup,
                orderDetails: orderDetails,
                store: store,
                showAddPopup: showAddPopup,
                openPopup: openPopup,
                closeAddPopup: closeAddPopup,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional({ orderDetails }),
            ...{ orderDetails },
            $emit: emit,
        };
    },
});
;
