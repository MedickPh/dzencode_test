<template>
    <div class="popup_wrapper" @click="checkClickOutside">
        <div class="popup_content" :data-popup-content="true">
            <slot></slot>
            <button @click="closeCurrentPopup">
                <img src="/close.webp" alt="" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['closePopup'])
const closeCurrentPopup = (event) => {
    emit('closePopup')
}
const checkClickOutside = (event) => {
    const popupContent = document.querySelector('[data-popup-content]')

    if (popupContent && !popupContent.contains(event.target)) {
        closeCurrentPopup()
    }
}
</script>

<style scoped lang="scss">
.popup_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 10;

    .popup_content {
        width: auto;
        height: auto;
        min-width: 300px;
        min-height: 150px;
        border-radius: 10px;
        position: relative;
        background-color: #fff;

        button {
            border: none;
            position: absolute;
            top: -15px;
            right: -25px;
            background-color: transparent;
            cursor: pointer;
        }
    }
}
</style>
