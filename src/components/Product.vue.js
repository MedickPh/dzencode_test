import { ref, defineProps, onMounted, defineEmits } from 'vue';
import { month_Ua } from '../data/month_UA.js';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits(['openPopup']);
const { product } = defineProps(['product']);
const guaranteeStartDate = ref(null);
const guaranteeEndDate = ref(null);
const usdPrice = ref(null);
const uahPrice = ref(null);
const orderDateFull = ref(null);
const orderDateShort = ref(null);
const productDate = ref(null);
const getPrice = () => {
    product.price.forEach((el) => {
        if (el.symbol === 'USD') {
            usdPrice.value = el.value;
        }
        else if (el.symbol === 'UAH') {
            uahPrice.value = el.value;
        }
    });
};
const getShortDate = (data) => {
    const setDate = new Date(data);
    const day = setDate.getDate();
    const month = setDate.getMonth();
    const year = setDate.getFullYear();
    return `${month.toString().padStart(2, '0')} / ${year}`;
};
const getFullDate = (data) => {
    const setDate = new Date(data);
    const day = setDate.getDate();
    const month = setDate.getMonth();
    const year = setDate.getFullYear();
    return `${day.toString().padStart(2, '0')} / ${month_Ua[month].slice(0, 3)} / ${year}`;
};
const openPopup = () => {
    emit('openPopup', {
        id: product.id,
        title: product.title,
        serialNumber: product.serialNumber,
        photo: product.photo,
        isNew: product.isNew
    });
};
onMounted(() => {
    getPrice();
    guaranteeStartDate.value = getFullDate(product.guarantee.start);
    guaranteeEndDate.value = getFullDate(product.guarantee.end);
    orderDateFull.value = getFullDate(product.order.date);
    orderDateShort.value = getShortDate(product.order.date);
    productDate.value = getFullDate(product.date);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ['product'],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['product_indicator', __VLS_ctx.product.isNew === 1 ? 'new' : 'old'])) }, });
    __VLS_styleScopedClasses = (['product_indicator', product.isNew === 1 ? 'new' : 'old']);
    // @ts-ignore
    [product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.product.photo)), alt: (""), });
    // @ts-ignore
    [product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_title_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_title") }, });
    (__VLS_ctx.product.title ? __VLS_ctx.product.title : '-');
    // @ts-ignore
    [product, product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_serial_number") }, });
    (__VLS_ctx.product.serialNumber ? __VLS_ctx.product.serialNumber : '-');
    // @ts-ignore
    [product, product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_type") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.product.type ? __VLS_ctx.product.type : '-');
    // @ts-ignore
    [product, product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_specification") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.product.specification ? __VLS_ctx.product.specification : '-');
    // @ts-ignore
    [product, product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("guarantee_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.guaranteeStartDate ? __VLS_ctx.guaranteeStartDate : '-');
    // @ts-ignore
    [guaranteeStartDate, guaranteeStartDate,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.guaranteeEndDate ? __VLS_ctx.guaranteeEndDate : '-');
    // @ts-ignore
    [guaranteeEndDate, guaranteeEndDate,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.productDate ? __VLS_ctx.productDate : '-');
    // @ts-ignore
    [productDate, productDate,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_status") }, });
    if (__VLS_ctx.product.isNew === 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("status_new") }, });
        (__VLS_ctx.$t('products.product_type.new'));
        // @ts-ignore
        [product, $t,];
    }
    if (__VLS_ctx.product.isNew !== 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("status_old") }, });
        (__VLS_ctx.$t('products.product_type.old'));
        // @ts-ignore
        [product, $t,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("price") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("usd_price") }, });
    (__VLS_ctx.usdPrice ? __VLS_ctx.usdPrice : '-');
    // @ts-ignore
    [usdPrice, usdPrice,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("uah_price") }, });
    (__VLS_ctx.uahPrice ? __VLS_ctx.uahPrice : '-');
    // @ts-ignore
    [uahPrice, uahPrice,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("order_title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.product.order.title ? __VLS_ctx.product.order.title : '-');
    // @ts-ignore
    [product, product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("order_date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("date_short") }, });
    (__VLS_ctx.orderDateShort ? __VLS_ctx.orderDateShort : '-');
    // @ts-ignore
    [orderDateShort, orderDateShort,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.orderDateFull ? __VLS_ctx.orderDateFull : '-');
    // @ts-ignore
    [orderDateFull, orderDateFull,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("order_desc") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.product.order.description ? __VLS_ctx.product.order.description : '-');
    // @ts-ignore
    [product, product,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.openPopup) }, ...{ class: ("delete_product") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/delete.webp"), alt: (""), });
    // @ts-ignore
    [openPopup,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['details_wrapper'];
        __VLS_styleScopedClasses['product_img'];
        __VLS_styleScopedClasses['product_title_wrapper'];
        __VLS_styleScopedClasses['product_title'];
        __VLS_styleScopedClasses['product_serial_number'];
        __VLS_styleScopedClasses['product_type'];
        __VLS_styleScopedClasses['product_specification'];
        __VLS_styleScopedClasses['guarantee_wrapper'];
        __VLS_styleScopedClasses['product_date'];
        __VLS_styleScopedClasses['product_status'];
        __VLS_styleScopedClasses['status_new'];
        __VLS_styleScopedClasses['status_old'];
        __VLS_styleScopedClasses['price'];
        __VLS_styleScopedClasses['usd_price'];
        __VLS_styleScopedClasses['uah_price'];
        __VLS_styleScopedClasses['order_title'];
        __VLS_styleScopedClasses['order_date'];
        __VLS_styleScopedClasses['date_short'];
        __VLS_styleScopedClasses['order_desc'];
        __VLS_styleScopedClasses['delete_product'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                $props: __VLS_makeOptional({ product }),
                ...{ product },
                $emit: emit,
                product: product,
                guaranteeStartDate: guaranteeStartDate,
                guaranteeEndDate: guaranteeEndDate,
                usdPrice: usdPrice,
                uahPrice: uahPrice,
                orderDateFull: orderDateFull,
                orderDateShort: orderDateShort,
                productDate: productDate,
                openPopup: openPopup,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional({ product }),
            ...{ product },
            $emit: emit,
        };
    },
});
;
