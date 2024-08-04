<template>
    <div class="details_wrapper">
        <div :class="['product_indicator', product.isNew === 1 ? 'new' : 'old']"></div>
        <div class="product_img">
            <img :src="product.photo" alt="" />
        </div>
        <div class="product_title_wrapper">
            <div class="product_title">{{ product.title ? product.title : '-' }}</div>
            <div class="product_serial_number">
                {{ product.serialNumber ? product.serialNumber : '-' }}
            </div>
        </div>
        <div class="product_type">
            <p>{{ product.type ? product.type : '-' }}</p>
        </div>
        <div class="product_specification">
            <p>{{ product.specification ? product.specification : '-' }}</p>
        </div>
        <div class="guarantee_wrapper">
            <p><span>c</span> {{ guaranteeStartDate ? guaranteeStartDate : '-' }}</p>
            <p><span>по</span> {{ guaranteeEndDate ? guaranteeEndDate : '-' }}</p>
        </div>
        <div class="product_date">
            <p>{{ productDate ? productDate : '-' }}</p>
        </div>
        <div class="product_status">
            <span class="status_new" v-if="product.isNew === 1">{{
                $t('products.product_type.new')
            }}</span>
            <span class="status_old" v-if="product.isNew !== 1">{{
                $t('products.product_type.old')
            }}</span>
        </div>
        <div class="price">
            <p class="usd_price">{{ usdPrice ? usdPrice : '-' }} $</p>
            <p class="uah_price">{{ uahPrice ? uahPrice : '-' }} UAH</p>
        </div>
        <div class="order_title">
            <p>{{ product.order.title ? product.order.title : '-' }}</p>
        </div>
        <div class="order_date">
            <p class="date_short">{{ orderDateShort ? orderDateShort : '-' }}</p>
            <p>{{ orderDateFull ? orderDateFull : '-' }}</p>
        </div>
        <div class="order_desc">
            <p>{{ product.order.description ? product.order.description : '-' }}</p>
        </div>
        <button class="delete_product" @click="openPopup">
            <img src="/delete.webp" alt="" />
        </button>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted, defineEmits } from 'vue'
import { month_Ua } from '../data/month_Ua.js'

const emit = defineEmits(['openPopup'])
const { product } = defineProps(['product'])

const guaranteeStartDate = ref(null)
const guaranteeEndDate = ref(null)
const usdPrice = ref(null)
const uahPrice = ref(null)
const orderDateFull = ref(null)
const orderDateShort = ref(null)
const productDate = ref(null)

const getPrice = () => {
    product.price.forEach((el) => {
        if (el.symbol === 'USD') {
            usdPrice.value = el.value
        } else if (el.symbol === 'UAH') {
            uahPrice.value = el.value
        }
    })
}
const getShortDate = (data) => {
    const setDate = new Date(data)
    const day = setDate.getDate()
    const month = setDate.getMonth()
    const year = setDate.getFullYear()
    return `${month.toString().padStart(2, '0')} / ${year}`
}
const getFullDate = (data) => {
    const setDate = new Date(data)
    const day = setDate.getDate()
    const month = setDate.getMonth()
    const year = setDate.getFullYear()
    return `${day.toString().padStart(2, '0')} / ${month_Ua[month].slice(0, 3)} / ${year}`
}

const openPopup = () => {
    emit('openPopup', {
        id: product.id,
        title: product.title,
        serialNumber: product.serialNumber,
        photo: product.photo,
        isNew: product.isNew
    })
}
onMounted(() => {
    getPrice()
    guaranteeStartDate.value = getFullDate(product.guarantee.start)
    guaranteeEndDate.value = getFullDate(product.guarantee.end)
    orderDateFull.value = getFullDate(product.order.date)
    orderDateShort.value = getShortDate(product.order.date)
    productDate.value = getFullDate(product.date)
})
</script>

<style scoped lang="scss">
.details_wrapper {
    margin: 10px 0;
    padding: 5px 10px;
    border: 2px solid #bdbdbd;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0 0 auto;
    p {
        font-size: 1.1rem;
    }
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
        width: 700px;

        .product_title {
            font-size: 1.5rem;
            font-weight: 600;
        }
        .product_serial_number {
            opacity: 0.8;
            color: #5a5a5a;
        }
    }
    .product_type,
    .product_specification,
    .guarantee_wrapper,
    .order_title,
    .order_desc,
    .product_date {
        width: 150px;
        min-width: 150px;
        margin: 0 10px;
        p {
            text-align: center;
        }
    }
    .guarantee_wrapper {
        display: flex;
        flex-direction: column;
        p {
            font-size: 1.2rem;
            font-weight: 500;
            span {
                opacity: 0.8;
                color: #5a5a5a;
                font-size: 1rem !important;
            }
        }
    }
    .product_status {
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0 15px;
        width: 100px;
        min-width: 100px;
        text-align: center;
    }
    .price,
    .order_date {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 150px;
        min-width: 150px;
        margin: 0 10px;

        .date_short,
        .usd_price {
            opacity: 0.8;
            color: #5a5a5a;
        }
    }
    .status_new {
        color: #48b02d;
    }
    .status_old {
        color: red;
    }

    .delete_product {
        border: none;
        background-color: transparent;
        width: 100%;
        max-width: 25px;
    }
}
</style>
../data/month_Ua.js
