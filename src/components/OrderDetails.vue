<template>
    <div class="details_wrapper">
        <div class="title_wrapper">
            <h2 class="title">{{ orderDetails.title }}</h2>
            <div class="add_button_wrapper" @click="showAddPopup = true">
                <button class="add_new_order_btn">
                    <img src="/add.webp" alt="" />
                </button>
                <p>{{ $t('orders.details_add_btn.title') }}</p>
            </div>
            <Transition name="show_add_popup">
                <div class="add_new_product_popup" v-if="showAddPopup">
                    <SmallPopup @closePopup="closeAddPopup()">
                        <p>{{ $t('orders.details_add_btn.text') }}</p>
                    </SmallPopup>
                </div>
            </Transition>
        </div>
        <div class="details" v-for="(order, index) in orderDetails.products" :key="index">
            <div :class="['product_indicator', order.isNew === 1 ? 'new' : 'old']"></div>
            <div class="product_img">
                <img :src="order.photo" alt="" />
            </div>
            <div class="product_title_wrapper">
                <div class="product_title">{{ order.title }}</div>
                <div class="product_serial_number">{{ order.serialNumber }}</div>
            </div>
            <div class="product_status">
                <span class="status_new" v-if="order.isNew === 1">{{
                    $t('orders.product_type.new')
                }}</span>
                <span class="status_old" v-if="order.isNew !== 1">{{
                    $t('orders.product_type.old')
                }}</span>
            </div>
            <button class="delete_order" @click="openPopup(order)">
                <img src="/delete.webp" alt="" />
            </button>
        </div>
        <button class="close_details" @click="store.setShowOrdersDetails(0)">
            <img src="/close.webp" alt="" />
        </button>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted, defineEmits } from 'vue'
import { useMainStore } from '../stores/mainStore.ts'
import SmallPopup from '../views/SmallPopup.vue'

const emit = defineEmits(['openPopup'])

const { orderDetails } = defineProps(['orderDetails'])
const store = useMainStore()

const showAddPopup = ref(false)

const openPopup = (order) => {
    emit('openPopup', {
        id: order.id,
        title: order.title,
        serialNumber: order.serialNumber,
        photo: order.photo,
        isNew: order.isNew
    })
}

const closeAddPopup = (event) => {
    showAddPopup.value = false
}
</script>

<style scoped lang="scss">
.details_wrapper {
    padding: 15px;
    position: relative;

    .title_wrapper {
        position: relative;
        .title {
            font-size: 2rem;
            font-weight: 600;
            margin: 30px 70px;
        }
        .add_button_wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 10px;
            cursor: pointer;
            background-color: transparent;

            .add_new_order_btn {
                border: none;
                width: 50px;
            }
            p {
                color: #48b02d;
                font-weight: 600;
            }
        }
        .add_new_product_popup {
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
        .show_add_popup-enter-active {
            animation: crawl 1s;
        }
        .show_add_popup-leave-active {
            animation: crawl 1s reverse;
        }
    }

    .details {
        margin: 10px 0;
        padding: 5px 10px;
        border: 2px solid #bdbdbd;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .product_indicator {
            border-radius: 50%;
            width: 10px;
            height: 10px;
            margin: 15px;
        }
        .new {
            background-color: #48b02d;
        }
        .old {
            background-color: red;
        }
        .product_img {
            margin: 0 15px;
            width: 100%;
            max-width: 50px;
            img {
                width: 100%;
                max-width: 50px;
            }
        }
        .product_title_wrapper {
            display: flex;
            flex-direction: column;
            margin: 15px;
            width: 100%;
            max-width: 75%;

            .product_title {
                font-size: 1.5rem;
                font-weight: 600;
            }
            .product_serial_number {
                opacity: 0.8;
                color: #5a5a5a;
            }
        }
        .product_status {
            font-size: 1.2rem;
            font-weight: 500;
            margin: 0 15px;
            width: 100%;
            max-width: 55px;
            text-align: center;
        }
        .status_new {
            color: #48b02d;
        }
        .status_old {
            color: red;
        }
        .delete_order {
            border: none;
            background-color: transparent;
            width: 100%;
            max-width: 25px;
        }
    }
    .close_details {
        border: none;
        position: absolute;
        background-color: transparent;
        top: -15px;
        right: -15px;
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
</style>
