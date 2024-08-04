<template>
    <div class="orders_wrapper">
        <div class="orders_title">
            <button class="add_new_order_btn" @click="showAddPopup = true">
                <img src="/add.webp" alt="" />
            </button>
            <h2 class="title">{{ $t('orders.title') }}</h2>
            <div class="orders_count">&nbsp; / {{ ordersToShow.length }}</div>
            <Transition name="show_popup">
                <div class="add_new_order_popup" v-if="showAddPopup">
                    <SmallPopup @closePopup="closeAddPopup()">
                        <p>{{ $t('orders.popup_text') }}</p>
                    </SmallPopup>
                </div>
            </Transition>
        </div>
        <div class="main_orders">
            <div
                :class="[
                    'order_wrapper',
                    store.showOrderDetails === 0 ? 'order_full' : 'order_short'
                ]"
            >
                <div :class="['order']" v-for="(order, index) in ordersToShow" :key="index">
                    <Order :order @openPopup="confirmDeleteOrder" />
                </div>
            </div>
            <Transition name="show_details">
                <div
                    :class="[
                        'order_details',
                        store.showOrderDetails === 0 ? 'order_details_hide' : 'order_details_show'
                    ]"
                    v-if="store.showOrderDetails !== 0"
                >
                    <OrderDetails :orderDetails @openPopup="confirmDeleteProduct" />
                </div>
            </Transition>
        </div>
        <Transition name="show_delete_popup">
            <PopUp v-if="isShowPopup" @closePopup="closeDeletePopup()">
                <ConfirmDeleteOrder
                    v-if="deleteOrderSlot"
                    :deleteOrderData
                    @close="isShowPopup = false"
                    @confirm="isShowPopup = false"
                />
                <ConfirmDeleteProduct
                    v-if="deleteProductSlot"
                    :deleteProductData
                    @close="isShowPopup = false"
                    @confirm="isShowPopup = false"
                />
            </PopUp>
        </Transition>
    </div>
</template>

<script setup>
import SmallPopup from './SmallPopup.vue'
import PopUp from '../views/PopUp.vue'
import Order from '../components/Order.vue'
import OrderDetails from '../components/OrderDetails.vue'
import ConfirmDeleteOrder from '../components/ConfirmDeleteOrder.vue'
import ConfirmDeleteProduct from '../components/ConfirmDeleteProduct.vue'

import { ref, onMounted, watch } from 'vue'
import { useMainStore } from '../stores/mainStore.ts'
import { getOrdersToShow } from '../methods/getOrdersToSHow.js'
import { getOrderDetails } from '../methods/getOrderDetails.js'

const store = useMainStore()

const ordersToShow = ref([])
const showAddPopup = ref(false)
const isShowPopup = ref(false)
const deleteOrderData = ref(null)
const deleteProductData = ref(null)
const deleteOrderSlot = ref(false)
const deleteProductSlot = ref(false)
const orderDetails = ref()

const confirmDeleteOrder = (orderId) => {
    deleteOrderData.value = orderId
    deleteOrderSlot.value = true
    isShowPopup.value = true
}

const confirmDeleteProduct = (productData) => {
    deleteProductData.value = productData
    deleteProductSlot.value = true
    isShowPopup.value = true
}

const closeAddPopup = (event) => {
    showAddPopup.value = false
}

const closeDeletePopup = () => {
    isShowPopup.value = false
    deleteOrderData.value = null
    deleteProductData.value = null
    deleteOrderSlot.value = false
    deleteProductSlot.value = false
}

onMounted(() => {
    ordersToShow.value = getOrdersToShow(store.data.orders)
})

watch(
    () => store.showOrderDetails,
    (newValue) => {
        if (newValue !== 0) {
            const orderData = store.data.orders.find((el) => el.id === store.showOrderDetails)
            orderDetails.value = getOrderDetails(orderData)
        }
    },
    { immediate: true }
)
</script>

<style scoped lang="scss">
.orders_wrapper {
    padding: 75px 0 0 50px;

    .orders_title {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        .add_new_order_btn {
            border: none;
            outline: none;
            padding: 0;
            img {
                width: 100%;
                max-width: 50px;
            }
        }
        .title {
            font-size: 2rem;
            margin-left: 25px;
        }
        .orders_count {
            font-size: 2rem;
            font-weight: 600;
        }
        .add_new_order_popup {
            position: absolute;
            top: -70px;
            left: 65px;
            width: 100%;
            max-width: 200px;
            padding: 10px 15px;
            background-color: #fff;
            border: 2px solid #bdbdbd;
            border-radius: 15px;
        }
        .show_popup-enter-active {
            animation: crawl 1s;
        }
        .show_popup-leave-active {
            animation: crawl 1s reverse;
        }
    }
    .main_orders {
        display: flex;
        flex-direction: row;
        margin-top: 25px;
        padding-top: 15px;

        .order_wrapper {
            width: 100%;
            transition: width 1s linear;

            .order {
                border: 2px solid #bdbdbd;
                border-radius: 10px;
                margin: 15px;
                height: 100px;
                transition:
                    box-shadow 0.3s ease,
                    transform 0.3s ease;
            }
            .order:hover {
                -webkit-box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.5);
                box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.5);
                transform: scale(1.005);
            }
        }
        .order_full {
            width: calc(100% - 30px);
        }
        .order_short {
            width: 35%;
        }

        .order_details {
            width: 100%;
            border: 2px solid #bdbdbd;
            border-radius: 10px;
            margin: 15px;
        }
        .show_details-enter-active {
            animation: swipe 1s ease-out;
        }
        .show_details-leave-active {
            animation: swipe 1s ease-out reverse;
        }
    }
    .show_delete_popup-enter-active {
        animation: show 1s ease-out;
    }
    .show_delete_popup-leave-active {
        animation: show 1s ease-out reverse;
    }
}
@keyframes crawl {
    0% {
        top: -500px;
        opacity: 0;
    }
    100% {
        top: -70px;
        opacity: 1;
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
@keyframes swipe {
    0% {
        width: 0;
        opacity: 0;
    }
    100% {
        width: 100%;
        opacity: 1;
    }
}
</style>
