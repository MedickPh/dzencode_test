import { ref, onMounted, watch } from 'vue';
import { getProductsToShow } from '../methods/getProductsToShow.js';
import Product from '../components/Product.vue';
import PopUp from '../views/PopUp.vue';
import ConfirmDeleteProduct from '../components/ConfirmDeleteProduct.vue';
import { useMainStore } from '../stores/mainStore.ts';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useMainStore();
const allProducts = ref(null);
const products = ref(null);
const productsType = ref();
const filterInput = ref('all');
const productCount = ref(null);
const isShowPopup = ref(false);
const deleteProductData = ref(null);
const confirmDeleteProduct = (productData) => {
    deleteProductData.value = productData;
    isShowPopup.value = true;
};
const closeDeletePopup = () => {
    isShowPopup.value = false;
    deleteProductData.value = null;
};
const filterProducts = (value) => {
    let result;
    if (value !== 'all') {
        result = allProducts.value.filter((product) => {
            if (product.type === value) {
                return product;
            }
        });
    }
    else {
        result = allProducts.value;
    }
    return result;
};
const setProductTypes = (data) => {
    const result = new Set();
    data.forEach((product) => {
        result.add(product.type);
    });
    return result;
};
onMounted(() => {
    allProducts.value = getProductsToShow(store.data.products, store.data.orders);
    products.value = filterProducts(filterInput.value);
    productsType.value = setProductTypes(allProducts.value);
    productCount.value = allProducts.value.length;
});
watch(filterInput, (newValue) => {
    products.value = filterProducts(newValue);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("products_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product_title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("title") }, });
    (__VLS_ctx.$t('products.title'));
    // @ts-ignore
    [$t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("orders_count") }, });
    (__VLS_ctx.productCount);
    // @ts-ignore
    [productCount,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("products_filter_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ name: ("type"), id: ("type"), value: ((__VLS_ctx.filterInput)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("all"), });
    (__VLS_ctx.$t('products.select_all'));
    // @ts-ignore
    [$t, filterInput,];
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.productsType))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((item)), value: ((item)), });
        (item);
        // @ts-ignore
        [productsType,];
    }
    for (const [product, index] of __VLS_getVForSourceType((__VLS_ctx.products))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main_product_wrapper") }, key: ((index)), });
        // @ts-ignore
        [Product,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Product, new Product({ ...{ 'onOpenPopup': {} }, product: (product), }));
        const __VLS_1 = __VLS_0({ ...{ 'onOpenPopup': {} }, product: (product), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        ({}({ ...{ 'onOpenPopup': {} }, product: (product), }));
        let __VLS_5;
        const __VLS_6 = {
            onOpenPopup: (__VLS_ctx.confirmDeleteProduct)
        };
        const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Product, __VLS_1));
        let __VLS_2;
        let __VLS_3;
        // @ts-ignore
        [products, confirmDeleteProduct,];
    }
    // @ts-ignore
    const __VLS_7 = {}
        .Transition;
    ({}.Transition);
    ({}.Transition);
    __VLS_components.Transition;
    __VLS_components.Transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ name: ("show_delete_popup"), }));
    const __VLS_9 = __VLS_8({ name: ("show_delete_popup"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    ({}({ name: ("show_delete_popup"), }));
    const __VLS_12 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9));
    if (__VLS_ctx.isShowPopup) {
        // @ts-ignore
        [PopUp, PopUp,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(PopUp, new PopUp({ ...{ 'onClosePopup': {} }, }));
        const __VLS_14 = __VLS_13({ ...{ 'onClosePopup': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ 'onClosePopup': {} }, }));
        let __VLS_18;
        const __VLS_19 = {
            onClosePopup: (...[$event]) => {
                if (!((__VLS_ctx.isShowPopup)))
                    return;
                __VLS_ctx.closeDeletePopup();
                // @ts-ignore
                [isShowPopup, closeDeletePopup,];
            }
        };
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(PopUp, __VLS_14));
        let __VLS_15;
        let __VLS_16;
        // @ts-ignore
        [ConfirmDeleteProduct,];
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(ConfirmDeleteProduct, new ConfirmDeleteProduct({ ...{ 'onClose': {} }, ...{ 'onConfirm': {} }, deleteProductData: (__VLS_ctx.deleteProductData), }));
        const __VLS_21 = __VLS_20({ ...{ 'onClose': {} }, ...{ 'onConfirm': {} }, deleteProductData: (__VLS_ctx.deleteProductData), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
        ({}({ ...{ 'onClose': {} }, ...{ 'onConfirm': {} }, deleteProductData: (__VLS_ctx.deleteProductData), }));
        let __VLS_25;
        const __VLS_26 = {
            onClose: (...[$event]) => {
                if (!((__VLS_ctx.isShowPopup)))
                    return;
                __VLS_ctx.isShowPopup = false;
                // @ts-ignore
                [isShowPopup, deleteProductData,];
            }
        };
        const __VLS_27 = {
            onConfirm: (...[$event]) => {
                if (!((__VLS_ctx.isShowPopup)))
                    return;
                __VLS_ctx.isShowPopup = false;
                // @ts-ignore
                [isShowPopup,];
            }
        };
        const __VLS_24 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ConfirmDeleteProduct, __VLS_21));
        let __VLS_22;
        let __VLS_23;
        __VLS_nonNullable(__VLS_17.slots).default;
    }
    __VLS_nonNullable(__VLS_12.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['products_wrapper'];
        __VLS_styleScopedClasses['product_title'];
        __VLS_styleScopedClasses['title'];
        __VLS_styleScopedClasses['orders_count'];
        __VLS_styleScopedClasses['products_filter_wrapper'];
        __VLS_styleScopedClasses['main_product_wrapper'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Product: Product,
                PopUp: PopUp,
                ConfirmDeleteProduct: ConfirmDeleteProduct,
                products: products,
                productsType: productsType,
                filterInput: filterInput,
                productCount: productCount,
                isShowPopup: isShowPopup,
                deleteProductData: deleteProductData,
                confirmDeleteProduct: confirmDeleteProduct,
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
