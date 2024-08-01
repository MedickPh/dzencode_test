<template>
    <header>
        <div class="search_and_logo_wrapper">
            <img src="/chivas_logo.webp" alt="" class="header_logo" />
            <div class="input_wrapper">
                <input type="text" name="search" id="search" v-model="searchTerm" />
                <label for="search" :class="searchTerm.length >= 1 ? 'hide' : ''">Поиск</label>
            </div>
        </div>
        <TimeAndDate />
    </header>
</template>

<script setup>
import TimeAndDate from '../components/TimeAndDate.vue'
import { ref, onMounted } from 'vue'
import { useMainStore } from '../stores/mainStore.ts'

const store = useMainStore()
const checkTimeFormat = () => {
    const currentFormat = localStorage.getItem('timeFormat')
    if (currentFormat) {
        store.setTimeFormat(currentFormat)
    }
}

onMounted(checkTimeFormat)
const searchTerm = ref('')
</script>

<style scoped lang="scss">
header {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 25px;
    align-items: center;
    -webkit-box-shadow: 0px 4px 8px -5px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 4px 8px -5px rgba(0, 0, 0, 1);
    box-shadow: 0px 4px 8px -5px rgba(0, 0, 0, 1);

    .search_and_logo_wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;

        img {
            width: 100%;
            max-width: 150px;
            margin-right: 100px;
        }

        .input_wrapper {
            position: relative;
            width: 100%;

            input {
                border: none;
                border-radius: 5px;
                width: 100%;
                max-width: 350px;
                height: 30px;
                margin: 0 5px;
                padding: 0 10px;
                background-color: #efeded;
                outline: none;
            }

            label {
                position: absolute;
                top: 50%;
                left: 1rem;
                transform: translateY(-50%);
                pointer-events: none;
                transition: all 0.35s ease;
            }

            .hide {
                opacity: 0;
            }
        }
    }
}
</style>
