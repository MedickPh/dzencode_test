import SmallPopup from './SmallPopup.vue';
import PopUp from '../views/PopUp.vue';
import Order from '../components/Order.vue';
import OrderDetails from '../components/OrderDetails.vue';
import ConfirmDeleteOrder from '../components/ConfirmDeleteOrder.vue';
import ConfirmDeleteProduct from '../components/ConfirmDeleteProduct.vue';
import { ref, onMounted, watch } from 'vue';
import { useMainStore } from '../stores/mainStore.ts';
import { getOrdersToShow } from '../methods/getOrdersToSHow.js';
import { getOrderDetails } from '../methods/getOrderDetails.js';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useMainStore();
const ordersToShow = ref([]);
const showAddPopup = ref(false);
const isShowPopup = ref(false);
const deleteOrderData = ref(null);
const deleteProductData = ref(null);
const deleteOrderSlot = ref(false);
const deleteProductSlot = ref(false);
const orderDetails = ref();
const confirmDeleteOrder = (orderId) => {
    deleteOrderData.value = orderId;
    deleteOrderSlot.value = true;
    isShowPopup.value = true;
};
const confirmDeleteProduct = (productData) => {
    deleteProductData.value = productData;
    deleteProductSlot.value = true;
    isShowPopup.value = true;
};
const closeAddPopup = (event) => {
    showAddPopup.value = false;
};
const closeDeletePopup = () => {
    isShowPopup.value = false;
    deleteOrderData.value = null;
    deleteProductData.value = null;
    deleteOrderSlot.value = false;
    deleteProductSlot.value = false;
};
onMounted(() => {
    ordersToShow.value = getOrdersToShow(store.data.orders);
});
watch(() => store.showOrderDetails, (newValue) => {
    if (newValue !== 0) {
        const orderData = store.data.orders.find((el) => el.id === store.showOrderDetails);
        orderDetails.value = getOrderDetails(orderData);
    }
}, { immediate: true });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("orders_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("orders_title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.showAddPopup = true;
                // @ts-ignore
                [showAddPopup,];
            } }, ...{ class: ("add_new_order_btn") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/add.webp"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("title") }, });
    (__VLS_ctx.$t('orders.title'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("orders_count") }, });
    (__VLS_ctx.ordersToShow.length);
    // @ts-ignore
    [ordersToShow,];
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("show_popup"), }));
    const __VLS_2 = __VLS_1({ name: ("show_popup"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ name: ("show_popup"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    if (__VLS_ctx.showAddPopup) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("add_new_order_popup") }, });
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
        (__VLS_ctx.$t('orders.popup_text'));
        // @ts-ignore
        [$t,];
        __VLS_nonNullable(__VLS_10.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main_orders") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (([
                'order_wrapper',
                __VLS_ctx.store.showOrderDetails === 0 ? 'order_full' : 'order_short'
            ])) }, });
    __VLS_styleScopedClasses = ([
        'order_wrapper',
        store.showOrderDetails === 0 ? 'order_full' : 'order_short'
    ]);
    for (const [order, index] of __VLS_getVForSourceType((__VLS_ctx.ordersToShow))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['order'])) }, key: ((index)), });
        __VLS_styleScopedClasses = (['order']);
        // @ts-ignore
        [Order,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(Order, new Order({ ...{ 'onOpenPopup': {} }, order: (order), }));
        const __VLS_14 = __VLS_13({ ...{ 'onOpenPopup': {} }, order: (order), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ 'onOpenPopup': {} }, order: (order), }));
        let __VLS_18;
        const __VLS_19 = {
            onOpenPopup: (__VLS_ctx.confirmDeleteOrder)
        };
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Order, __VLS_14));
        let __VLS_15;
        let __VLS_16;
        // @ts-ignore
        [ordersToShow, store, confirmDeleteOrder,];
    }
    // @ts-ignore
    const __VLS_20 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ name: ("show_details"), }));
    const __VLS_22 = __VLS_21({ name: ("show_details"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ name: ("show_details"), }));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    if (__VLS_ctx.store.showOrderDetails !== 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: (([
                    'order_details',
                    __VLS_ctx.store.showOrderDetails === 0 ? 'order_details_hide' : 'order_details_show'
                ])) }, });
        __VLS_styleScopedClasses = ([
            'order_details',
            store.showOrderDetails === 0 ? 'order_details_hide' : 'order_details_show'
        ]);
        // @ts-ignore
        [OrderDetails,];
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(OrderDetails, new OrderDetails({ ...{ 'onOpenPopup': {} }, orderDetails: (__VLS_ctx.orderDetails), }));
        const __VLS_27 = __VLS_26({ ...{ 'onOpenPopup': {} }, orderDetails: (__VLS_ctx.orderDetails), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        ({}({ ...{ 'onOpenPopup': {} }, orderDetails: (__VLS_ctx.orderDetails), }));
        let __VLS_31;
        const __VLS_32 = {
            onOpenPopup: (__VLS_ctx.confirmDeleteProduct)
        };
        const __VLS_30 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(OrderDetails, __VLS_27));
        let __VLS_28;
        let __VLS_29;
        // @ts-ignore
        [store, store, orderDetails, confirmDeleteProduct,];
    }
    __VLS_nonNullable(__VLS_25.slots).default;
    // @ts-ignore
    const __VLS_33 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ name: ("show_delete_popup"), }));
    const __VLS_35 = __VLS_34({ name: ("show_delete_popup"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    ({}({ name: ("show_delete_popup"), }));
    const __VLS_38 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35));
    if (__VLS_ctx.isShowPopup) {
        // @ts-ignore
        [PopUp, PopUp,];
        // @ts-ignore
        const __VLS_39 = __VLS_asFunctionalComponent(PopUp, new PopUp({ ...{ 'onClosePopup': {} }, }));
        const __VLS_40 = __VLS_39({ ...{ 'onClosePopup': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
        ({}({ ...{ 'onClosePopup': {} }, }));
        let __VLS_44;
        const __VLS_45 = {
            onClosePopup: (...[$event]) => {
                if (!((__VLS_ctx.isShowPopup)))
                    return;
                __VLS_ctx.closeDeletePopup();
                // @ts-ignore
                [isShowPopup, closeDeletePopup,];
            }
        };
        const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PopUp, __VLS_40));
        let __VLS_41;
        let __VLS_42;
        if (__VLS_ctx.deleteOrderSlot) {
            // @ts-ignore
            [ConfirmDeleteOrder,];
            // @ts-ignore
            const __VLS_46 = __VLS_asFunctionalComponent(ConfirmDeleteOrder, new ConfirmDeleteOrder({ ...{ 'onClose': {} }, ...{ 'onConfirm': {} }, deleteOrderData: (__VLS_ctx.deleteOrderData), }));
            const __VLS_47 = __VLS_46({ ...{ 'onClose': {} }, ...{ 'onConfirm': {} }, deleteOrderData: (__VLS_ctx.deleteOrderData), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
            ({}({ ...{ 'onClose': {} }, ...{ 'onConfirm': {} }, deleteOrderData: (__VLS_ctx.deleteOrderData), }));
            let __VLS_51;
            const __VLS_52 = {
                onClose: (...[$event]) => {
                    if (!((__VLS_ctx.isShowPopup)))
                        return;
                    if (!((__VLS_ctx.deleteOrderSlot)))
                        return;
                    __VLS_ctx.isShowPopup = false;
                    // @ts-ignore
                    [isShowPopup, deleteOrderSlot, deleteOrderData,];
                }
            };
            const __VLS_53 = {
                onConfirm: (...[$event]) => {
                    if (!((__VLS_ctx.isShowPopup)))
                        return;
                    if (!((__VLS_ctx.deleteOrderSlot)))
                        return;
                    __VLS_ctx.isShowPopup = false;
                    // @ts-ignore
                    [isShowPopup,];
                }
            };
            const __VLS_50 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ConfirmDeleteOrder, __VLS_47));
            let __VLS_48;
            let __VLS_49;
        }
        if (__VLS_ctx.deleteProductSlot) {
            // @ts-ignore
            [ConfirmDeleteProduct,];
            // @ts-ignore
            const __VLS_54 = __VLS_asFunctionalComponent(ConfirmDeleteProduct, new ConfirmDeleteProduct({ ...{ 'onClose': {} }, ...{ 'onConfirm': {} }, deleteProductData: (__VLS_ctx.deleteProductData), }));
            const __VLS_55 = __VLS_54({ ...{ 'onClose': {} }, ...{ 'onConfirm': {} }, deleteProductData: (__VLS_ctx.deleteProductData), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
            ({}({ ...{ 'onClose': {} }, ...{ 'onConfirm': {} }, deleteProductData: (__VLS_ctx.deleteProductData), }));
            let __VLS_59;
            const __VLS_60 = {
                onClose: (...[$event]) => {
                    if (!((__VLS_ctx.isShowPopup)))
                        return;
                    if (!((__VLS_ctx.deleteProductSlot)))
                        return;
                    __VLS_ctx.isShowPopup = false;
                    // @ts-ignore
                    [isShowPopup, deleteProductSlot, deleteProductData,];
                }
            };
            const __VLS_61 = {
                onConfirm: (...[$event]) => {
                    if (!((__VLS_ctx.isShowPopup)))
                        return;
                    if (!((__VLS_ctx.deleteProductSlot)))
                        return;
                    __VLS_ctx.isShowPopup = false;
                    // @ts-ignore
                    [isShowPopup,];
                }
            };
            const __VLS_58 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ConfirmDeleteProduct, __VLS_55));
            let __VLS_56;
            let __VLS_57;
        }
        __VLS_nonNullable(__VLS_43.slots).default;
    }
    __VLS_nonNullable(__VLS_38.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['orders_wrapper'];
        __VLS_styleScopedClasses['orders_title'];
        __VLS_styleScopedClasses['add_new_order_btn'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['orders_count'];
        __VLS_styleScopedClasses['add_new_order_popup'];
        __VLS_styleScopedClasses['main_orders'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                SmallPopup: SmallPopup,
                PopUp: PopUp,
                Order: Order,
                OrderDetails: OrderDetails,
                ConfirmDeleteOrder: ConfirmDeleteOrder,
                ConfirmDeleteProduct: ConfirmDeleteProduct,
                store: store,
                ordersToShow: ordersToShow,
                showAddPopup: showAddPopup,
                isShowPopup: isShowPopup,
                deleteOrderData: deleteOrderData,
                deleteProductData: deleteProductData,
                deleteOrderSlot: deleteOrderSlot,
                deleteProductSlot: deleteProductSlot,
                orderDetails: orderDetails,
                confirmDeleteOrder: confirmDeleteOrder,
                confirmDeleteProduct: confirmDeleteProduct,
                closeAddPopup: closeAddPopup,
                closeDeletePopup: closeDeletePopup,
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
