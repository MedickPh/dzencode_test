<template>
    <div class="small_popup_wrapper">
        <slot></slot>
        <button @click="closeCurrentPopup">
            <img src="/close.webp" alt="" />
        </button>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['closePopup'])
const closeCurrentPopup = (event) => {
    emit('closePopup')
}
</script>

<style scoped lang="scss">
.small_popup_wrapper {
    width: 100%;
    height: auto;
    min-height: 100px;
    position: relative;

    button {
        border: none;
        position: absolute;
        top: -15px;
        right: -25px;
        background-color: transparent;
    }
}
</style>
