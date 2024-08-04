<template>
    <div class="products_wrapper">
        <div class="product_title">
            <h2 class="title">{{ $t('products.title') }}</h2>
            <p class="orders_count">&nbsp;\ {{ productCount }}</p>
            <div class="products_filter_wrapper">
                <select name="type" id="type" v-model="filterInput">
                    <option value="all">{{ $t('products.select_all') }}</option>
                    <option v-for="item of productsType" :key="item" :value="item">
                        {{ item }}
                    </option>
                </select>
            </div>
        </div>
        <div class="main_product_wrapper" v-for="(product, index) in products" :key="index">
            <Product :product @openPopup="confirmDeleteProduct" />
        </div>
        <Transition name="show_delete_popup">
            <PopUp v-if="isShowPopup" @closePopup="closeDeletePopup()">
                <ConfirmDeleteProduct
                    :deleteProductData
                    @close="isShowPopup = false"
                    @confirm="isShowPopup = false"
                />
            </PopUp>
        </Transition>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { getProductsToShow } from '../methods/getProductsToShow.js'
import Product from '../components/Product.vue'
import PopUp from '../views/PopUp.vue'
import ConfirmDeleteProduct from '../components/ConfirmDeleteProduct.vue'

import { useMainStore } from '../stores/mainStore.ts'

const store = useMainStore()

const allProducts = ref(null)
const products = ref(null)
const productsType = ref()
const filterInput = ref('all')
const productCount = ref(null)
const isShowPopup = ref(false)
const deleteProductData = ref(null)

const confirmDeleteProduct = (productData) => {
    deleteProductData.value = productData
    isShowPopup.value = true
}

const closeDeletePopup = () => {
    isShowPopup.value = false
    deleteProductData.value = null
}

const filterProducts = (value) => {
    let result
    if (value !== 'all') {
        result = allProducts.value.filter((product) => {
            if (product.type === value) {
                return product
            }
        })
    } else {
        result = allProducts.value
    }
    return result
}
const setProductTypes = (data) => {
    const result = new Set()
    data.forEach((product) => {
        result.add(product.type)
    })
    return result
}

onMounted(() => {
    allProducts.value = getProductsToShow(store.data.products, store.data.orders)
    products.value = filterProducts(filterInput.value)
    productsType.value = setProductTypes(allProducts.value)
    productCount.value = allProducts.value.length
})

watch(filterInput, (newValue) => {
    products.value = filterProducts(newValue)
})
</script>

<style scoped lang="scss">
.products_wrapper {
    padding: 75px 0 0 50px;
    width: 100%;
    height: 100%;
    max-width: 1600px;
    max-height: 900px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: thin;
    scrollbar-color: #8b8b8b #e0e0e0;

    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }

    &::-webkit-scrollbar-track {
        background: #e0e0e0;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #8b8b8b;
        border-radius: 10px;
        border: 3px solid #e0e0e0;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #5a5a5a;
    }
    .product_title {
        display: flex;
        flex-direction: row;
        align-items: center;
        .title {
            font-size: 2rem;
            margin-left: 25px;
        }
        .orders_count {
            font-size: 2rem;
            font-weight: 600;
        }
        .products_filter_wrapper {
            margin-left: 10px;
            select {
                background-color: #efeded;
                border-radius: 5px;
                border: 2px solid #bdbdbd;
                outline: none;
            }
        }
    }
    .main_product_wrapper {
        display: flex;
        flex-wrap: nowrap;
    }
    .show_delete_popup-enter-active {
        animation: show 1s ease-out;
    }
    .show_delete_popup-leave-active {
        animation: show 1s ease-out reverse;
    }
}
@keyframes show {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
