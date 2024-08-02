<template>
    <div class="manual_time_set">
        <div class="faq_block" v-if="showFaq">
            <p class="bold">Обратите внимание!</p>
            <p>Разница должна составлять не более 12 часов от текущего вашего времени</p>
        </div>
        <button class="settings_btn" @mouseover="showFaq = true" @mouseleave="showFaq = false">
            <img src="/question.webp" alt="Settings faq" />
        </button>
        <div class="time_format">
            <p
                :class="{ active: store.timeFormat === 'en-US' }"
                @click="store.changeTimeFormat('en-US')"
            >
                12h
            </p>
            <p
                :class="{ active: store.timeFormat === 'en-GB' }"
                @click="store.changeTimeFormat('en-GB')"
            >
                24h
            </p>
        </div>
        <input
            v-model="newTime"
            type="datetime-local"
            name="setTime"
            id="setTime"
            :class="isError ? 'input_error' : ''"
        />
        <button class="save_btn" @click="checkTime()">
            <img src="/square.webp" alt="" />
        </button>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useMainStore } from '../stores/mainStore.ts'
import { checkPossibleDeviation } from '../methods/checkPossibleDeviation.js'
const showFaq = ref(false)
const store = useMainStore()

const emit = defineEmits(['closePopup'])
const closeCurrentPopup = (event) => {
    emit('closePopup')
}

const newTime = ref()
const isError = ref(false)

const showError = () => {
    isError.value = true
    showFaq.value = true
    setTimeout(() => {
        isError.value = false
        showFaq.value = false
    }, 3000)
}

const checkTime = () => {
    if (!newTime.value) {
        showError()
        return
    }
    const checkedTime = checkPossibleDeviation(newTime.value)

    if (checkedTime !== false) {
        store.setManualDate(checkedTime)
        closeCurrentPopup()
    } else {
        showError()
        return
    }
}
</script>

<style scoped lang="scss">
.manual_time_set {
    position: relative;
    .time_format {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        p {
            cursor: pointer;
        }
        .active {
            display: block;
            color: rgb(224, 67, 0);
            font-size: 20px;
            font-weight: 600;
        }
    }

    input {
        border: none;
        border-radius: 5px;
        width: 100%;
        max-width: 175px;
        height: 30px;
        margin: 0 5px;
        padding: 0 10px;
        background-color: #efeded;
        outline: none;
        margin-top: 10px;
    }
    .input_error {
        border: 2px solid red;
    }
    .settings_btn {
        border: none;
        outline: none;
        padding: 0;
        margin-right: 5px;
        float: left;
        img {
            width: 100%;
            max-width: 35px;
        }
    }
    .faq_block {
        position: absolute;
        background-color: #ffffff;
        top: 0;
        left: -175px;
        padding: 5px;
        border: 2px solid #bdbdbd;
        border-radius: 15px;
        width: 170px;
        z-index: 5;

        .bold {
            font-weight: 600;
        }
    }
    .save_btn {
        border: none;
        position: absolute;
        bottom: -70%;
        right: 70px;
        background-color: transparent;
        img {
            width: 100%;
            max-width: 35px;
        }
    }
}
</style>
