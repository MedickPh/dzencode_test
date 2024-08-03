<template>
    <div class="orders_wrapper">
        <div class="orders_title">
            <button class="add_new_order_btn" @click="showAddPopup = true">
                <img src="/add.webp" alt="" />
            </button>
            <h2 class="title">Приходы</h2>
            <div class="orders_count">&nbsp; / {{ ordersToShow.length }}</div>
            <Transition name="show_popup">
                <div class="add_new_order_popup" v-if="showAddPopup">
                    <SmallPopup @closePopup="closeAddPopup()">
                        <p>Функционал для кнопки</p>
                    </SmallPopup>
                </div>
            </Transition>
        </div>
        <div class="main_orders">
            <div
                :class="['order', store.showOrderDetails === 0 ? 'order_full' : 'order_short']"
                v-for="(order, index) in ordersToShow"
                :key="index"
            >
                <OrderDetails :order @openPopup="confirmDelete" @openDetails="isOpenDetails" />
            </div>
        </div>
        <Transition name="show_delete_popup">
            <PopUp v-if="isSHowPopup" @closePopup="isSHowPopup = false">
                <ConfirmDelete
                    :deleteOrderData
                    @close="isSHowPopup = false"
                    @confirm="isSHowPopup = false"
                />
            </PopUp>
        </Transition>
    </div>
</template>

<script setup>
import SmallPopup from './SmallPopup.vue'
import PopUp from '../views/PopUp.vue'
import OrderDetails from '../components/OrderDetails.vue'
import ConfirmDelete from '../components/ConfirmDelete.vue'

import { ref, onMounted } from 'vue'
import { useMainStore } from '../stores/mainStore.ts'
import { getOrdersToShow } from '../methods/getOrdersToSHow.js'

const store = useMainStore()

const ordersToShow = ref([])
const showAddPopup = ref(false)
const isSHowPopup = ref(false)
const deleteOrderData = ref(null)

const confirmDelete = (orderId) => {
    deleteOrderData.value = orderId
    isSHowPopup.value = true
}

const closeAddPopup = (event) => {
    showAddPopup.value = false
}

onMounted(() => {
    ordersToShow.value = getOrdersToShow(store.data.orders)
})
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
        margin-top: 25px;
        padding-top: 15px;

        .order {
            border: 2px solid #bdbdbd;
            border-radius: 10px;
            margin: 15px;
            height: 100px;
            transition:
                box-shadow 0.3s ease,
                transform 0.3s ease,
                width 1s linear;
        }
        .order:hover {
            -webkit-box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.5);
            box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.5);
            transform: scale(1.005);
        }
        .order_full {
            width: calc(100% - 30px);
        }
        .order_short {
            width: 35%;
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
</style>
