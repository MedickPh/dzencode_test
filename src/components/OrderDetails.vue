<template>
    <div class="order_wrapper">
        <Transition name="shortDetails">
            <p
                class="title"
                @click="store.setShowOrdersDetails(order.id)"
                v-if="store.showOrderDetails === 0"
            >
                {{ order.title }}
            </p>
        </Transition>
        <div class="products_count_wrapper" @click="store.setShowOrdersDetails(order.id)">
            <img src="/menu.webp" alt="" />
            <div class="product_count">
                <span class="count">{{ order.productsCount }}</span>
                <p>Продукта/ов</p>
            </div>
        </div>
        <p class="date">
            <span class="date_short">{{ dateShort }}</span>
            <span class="date_full">{{ dateFull }}</span>
        </p>
        <Transition name="shortDetails">
            <p class="price" v-if="store.showOrderDetails === 0">
                <span class="usd_price"
                    >{{ order.productsPrice.USD ? order.productsPrice.USD : '' }} $</span
                >
                <span class="uah_price"> {{ order.productsPrice.UAH }} UAH</span>
            </p>
        </Transition>
        <Transition name="shortDetails">
            <button class="delete_order" @click="openPopup" v-if="store.showOrderDetails === 0">
                <img src="/delete.webp" alt="" />
            </button>
        </Transition>
        <div class="chosen_order_wrapper" v-if="store.showOrderDetails !== 0">
            <Transition name="chosen_order">
                <button class="chosen_order" v-if="store.showOrderDetails === order.id">
                    <img src="/forward.webp" alt="" />
                </button>
            </Transition>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps, onMounted, defineEmits } from 'vue'
import { useMainStore } from '../stores/mainStore.ts'
import { month_UA } from '../data/month_UA.js'

const store = useMainStore()

const { order } = defineProps(['order'])
const dateFull = ref()
const dateShort = ref()

const emit = defineEmits(['openPopup', 'openDetails'])

const openPopup = (event) => {
    emit('openPopup', {
        id: order.id,
        title: order.title,
        date: dateFull.value
    })
}

const dateFormat = (data) => {
    const setDate = new Date(data)
    const day = setDate.getDate()
    const month = setDate.getMonth()
    const year = setDate.getFullYear()
    dateShort.value = `${month.toString().padStart(2, '0')} / ${year}`
    dateFull.value = `${day.toString().padStart(2, '0')} / ${month_UA[month].slice(0, 3)} / ${year}`
}

onMounted(() => {
    dateFormat(order.date)
})
</script>

<style scoped lang="scss">
.order_wrapper {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 0 15px;
    position: relative;

    .title {
        text-decoration: underline;
        width: 100%;
        max-width: 700px;
        font-size: 1.5rem;
        cursor: pointer;
    }
    .products_count_wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        img {
            width: 35px;
            height: 35px;
            margin-right: 25px;
        }
        .product_count {
            .count {
                font-size: 1.5rem;
            }
            p {
            }
        }
    }
    .date,
    .price {
        display: flex;
        flex-direction: column;
        align-items: center;

        .date_short,
        .usd_price {
            opacity: 0.8;
            color: #5a5a5a;
        }
    }

    .delete_order {
        border: 0;
        padding: 0;
        margin-right: 15px;
        img {
            width: 25px;
            height: 25px;
        }
    }
    .chosen_order_wrapper {
        height: 100%;
        width: 52px;
        .chosen_order {
            border: 0;
            padding: 0;
            background-color: #a0a0a0;
            border-radius: 0 8px 8px 0;
            border-right: 2px solid #a0a0a0;
            height: 100%;
            img {
                width: 50px;
                height: 50px;
            }
        }
    }

    .shortDetails-enter-active {
        animation: fade 0.3s linear reverse;
    }
    .shortDetails-leave-active {
        animation: fade 0.3s linear;
    }
    .chosen_order-enter-active {
        animation: swipe 0.5s linear reverse;
    }
    .chosen_order-leave-active {
        animation: swipe 0.5s linear;
    }
}
@keyframes fade {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
@keyframes swipe {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
