<template>
    <div class="confirm_wrapper">
        <div class="text_wrapper">
            <h2>{{ $t('products.delete_popup.title') }}</h2>
            <div class="data_to_delete">
                <div
                    :class="['product_indicator', deleteProductData.isNew === 1 ? 'new' : 'old']"
                ></div>
                <div class="product_img">
                    <img :src="deleteProductData.photo" alt="" />
                </div>
                <div class="product_title_wrapper">
                    <div class="product_title">{{ deleteProductData.title }}</div>
                    <div class="product_serial_number">{{ deleteProductData.serialNumber }}</div>
                </div>
                <div class="product_status">
                    <span class="status_new" v-if="deleteProductData.isNew === 1">{{
                        $t('products.product_type.new')
                    }}</span>
                    <span class="status_old" v-if="deleteProductData.isNew !== 1">{{
                        $t('products.product_type.old')
                    }}</span>
                </div>
            </div>
        </div>
        <div class="confirm_block">
            <button class="cancel" @click="close">
                {{ $t('products.delete_popup.cancel_btn') }}
            </button>
            <button class="confirm" @click="confirm">
                <img src="/delete.webp" alt="" />
                {{ $t('products.delete_popup.confirm_btn') }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const { deleteProductData } = defineProps(['deleteProductData'])

const emit = defineEmits(['confirm', 'close'])
// Тут должна быть логика с отправкой метода делит на сервер с данными о приходе для удаления, после чего емитом попап можно закрыть.
const confirm = (event) => {
    emit('confirm')
}
const close = (event) => {
    emit('close')
}
</script>

<style scoped lang="scss">
.confirm_wrapper {
    width: 100%;
    max-width: 700px;
    .text_wrapper {
        h2 {
            margin: 25px 25px 0;
        }
        .data_to_delete {
            margin: 10px 0;
            padding: 5px 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            .product_indicator {
                border-radius: 50%;
                width: 15px;
                height: 10px;
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
        }
    }
    .confirm_block {
        background-color: #69c2a2;
        padding: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        button {
            border: none;
        }
        .cancel {
            margin-right: 15px;
            background-color: transparent;
            font-size: 1.2rem;
        }
        .confirm {
            padding: 15px;
            width: 200px;
            border-radius: 50px;
            color: red;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 1.2rem;

            img {
                width: 25px;
                height: 25px;
                margin-right: 15px;
            }
        }
    }
}
</style>
