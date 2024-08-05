import { ref, defineProps, onMounted, defineEmits } from 'vue';
import { useMainStore } from '../stores/mainStore.ts';
import { month_Ua } from '../data/month_Ua.js';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useMainStore();
const { order } = defineProps(['order']);
const dateFull = ref();
const dateShort = ref();
const emit = defineEmits(['openPopup']);
const openPopup = (event) => {
    emit('openPopup', {
        id: order.id,
        title: order.title,
        date: dateFull.value
    });
};
const dateFormat = (data) => {
    const setDate = new Date(data);
    const day = setDate.getDate();
    const month = setDate.getMonth();
    const year = setDate.getFullYear();
    dateShort.value = `${month.toString().padStart(2, '0')} / ${year}`;
    dateFull.value = `${day.toString().padStart(2, '0')} / ${month_Ua[month].slice(0, 3)} / ${year}`;
};
onMounted(() => {
    dateFormat(order.date);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ['order'],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("order_wrapper") }, });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("shortDetails"), }));
    const __VLS_2 = __VLS_1({ name: ("shortDetails"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ name: ("shortDetails"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    if (__VLS_ctx.store.showOrderDetails === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.store.showOrderDetails === 0)))
                        return;
                    __VLS_ctx.store.setShowOrdersDetails(__VLS_ctx.order.id);
                    // @ts-ignore
                    [store, store, order,];
                } }, ...{ class: ("title") }, });
        (__VLS_ctx.order.title);
        // @ts-ignore
        [order,];
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.store.setShowOrdersDetails(__VLS_ctx.order.id);
                // @ts-ignore
                [store, order,];
            } }, ...{ class: ("products_count_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/menu.webp"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_count") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("count") }, });
    (__VLS_ctx.order.productsCount);
    // @ts-ignore
    [order,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('orders.counter'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("date_short") }, });
    (__VLS_ctx.dateShort);
    // @ts-ignore
    [dateShort,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("date_full") }, });
    (__VLS_ctx.dateFull);
    // @ts-ignore
    [dateFull,];
    // @ts-ignore
    const __VLS_6 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ name: ("shortDetails"), }));
    const __VLS_8 = __VLS_7({ name: ("shortDetails"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ name: ("shortDetails"), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    if (__VLS_ctx.store.showOrderDetails === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("price") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("usd_price") }, });
        (__VLS_ctx.order.productsPrice.USD ? __VLS_ctx.order.productsPrice.USD : '');
        // @ts-ignore
        [store, order, order,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("uah_price") }, });
        (__VLS_ctx.order.productsPrice.UAH);
        // @ts-ignore
        [order,];
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_12 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ name: ("shortDetails"), }));
    const __VLS_14 = __VLS_13({ name: ("shortDetails"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ name: ("shortDetails"), }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    if (__VLS_ctx.store.showOrderDetails === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.openPopup) }, ...{ class: ("delete_order") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/delete.webp"), alt: (""), });
        // @ts-ignore
        [store, openPopup,];
    }
    __VLS_nonNullable(__VLS_17.slots).default;
    if (__VLS_ctx.store.showOrderDetails !== 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chosen_order_wrapper") }, });
        // @ts-ignore
        const __VLS_18 = {}
            .Transition;
        ({}.Transition);
        ({}.Transition);
        __VLS_components.Transition;
        __VLS_components.Transition;
        // @ts-ignore
        [Transition, Transition,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ name: ("chosen_order"), }));
        const __VLS_20 = __VLS_19({ name: ("chosen_order"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ name: ("chosen_order"), }));
        const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
        if (__VLS_ctx.store.showOrderDetails === __VLS_ctx.order.id) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("chosen_order") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/forward.webp"), alt: (""), });
            // @ts-ignore
            [store, store, order,];
        }
        __VLS_nonNullable(__VLS_23.slots).default;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['order_wrapper'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['products_count_wrapper'];
        __VLS_styleScopedClasses['product_count'];
        __VLS_styleScopedClasses['count'];
        __VLS_styleScopedClasses['date'];
        __VLS_styleScopedClasses['date_short'];
        __VLS_styleScopedClasses['date_full'];
        __VLS_styleScopedClasses['price'];
        __VLS_styleScopedClasses['usd_price'];
        __VLS_styleScopedClasses['uah_price'];
        __VLS_styleScopedClasses['delete_order'];
        __VLS_styleScopedClasses['chosen_order_wrapper'];
        __VLS_styleScopedClasses['chosen_order'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional({ order }),
                ...{ order },
                $emit: emit,
                store: store,
                order: order,
                dateFull: dateFull,
                dateShort: dateShort,
                openPopup: openPopup,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional({ order }),
            ...{ order },
            $emit: emit,
        };
    },
});
;
