<template>
    <div class="confirm_wrapper">
        <div class="text_wrapper">
            <h2>Вы уверены что хотите удалить этот приход?</h2>
            <div class="data_to_delete">
                <p class="order_title">{{ deleteOrderData.title }}</p>
                <p class="order_date">{{ deleteOrderData.date }}</p>
            </div>
        </div>
        <div class="confirm_block">
            <button class="cancel" @click="close">Отмена</button>
            <button class="confirm" @click="confirm">
                <img src="/delete.webp" alt="" />
                Удалить
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const { deleteOrderData } = defineProps(['deleteOrderData'])
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
    .text_wrapper {
        margin: 25px 25px 0;
        .data_to_delete {
            padding: 25px;
            .order_title {
                font-size: 1.25rem;
            }
            .order_date {
                opacity: 0.8;
                color: #5a5a5a;
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
