<template>
    <header>
        <div class="search_and_logo_wrapper">
            <img src="/chivas_logo.webp" alt="" class="header_logo" />
            <div class="input_wrapper">
                <input type="text" name="search" id="search" v-model="searchTerm" />
                <label for="search" :class="searchTerm.length >= 1 ? 'hide' : ''">{{
                    $t('header.search_input')
                }}</label>
            </div>
            <div class="lang_switch">
                <p @click="setLang('Ua')">Ua</p>
                <div class="line_wrapper">
                    <div class="line">
                        <div :class="['circle', currentLang === 'Ua' ? 'Ua' : 'Ru']">
                            {{ currentLang }}
                        </div>
                    </div>
                </div>
                <p @click="setLang('Ru')">Ru</p>
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
const currentLang = ref('Ua')
//Получение формата времени при загрузке
const checkTimeFormat = () => {
    const currentFormat = localStorage.getItem('timeFormat')
    if (currentFormat) {
        store.setTimeFormat(currentFormat)
    }
}

const searchTerm = ref('')

// Изменение локали языка
const setLang = (lang) => {
    store.setLanguage(lang)
    currentLang.value = lang
}

onMounted(checkTimeFormat)
</script>

<style scoped lang="scss">
header {
    width: 100%;
    max-width: 100%;
    height: 60px;
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
                left: 25px;
                transform: translateY(-50%);
                pointer-events: none;
                transition: all 0.35s ease;
            }

            .hide {
                opacity: 0;
            }
        }
        .lang_switch {
            width: 100%;
            max-width: 125px;
            min-width: 125px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin: 0 10px;

            p {
                padding: 10px;
                cursor: pointer;
            }

            .line_wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                z-index: 10;

                .line {
                    position: absolute;
                    top: 0;
                    left: -5px;
                    background-color: #313131;
                    width: 60px;
                    height: 3px;
                    border-radius: 5px;
                    z-index: 5;
                    opacity: 0.99;
                }
                .circle {
                    position: absolute;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    z-index: 6;
                    opacity: 0.99;
                    color: rgb(253, 253, 253);
                    text-align: center;
                }
                .Ua {
                    top: -12px;
                    left: -25px;
                    background-color: #313131;
                    color: white;
                    animation: slideUA 1s ease-in-out;
                }
                .Ru {
                    top: -12px;
                    left: 60px;
                    background-color: #ff0000;
                    color: black;
                    animation: slideRU 1s ease-in-out;
                }
            }
        }
    }
}
@keyframes slideUA {
    0% {
        top: -12px;
        left: 60px;
        background-color: #ff0000;
        color: black;
    }
    10% {
        color: transparent;
    }

    85% {
        color: transparent;
    }
    100% {
        top: -12px;
        left: -25px;
        color: white;
        background-color: #313131;
    }
}
@keyframes slideRU {
    0% {
        top: -12px;
        left: -25px;
        background-color: #313131;
        color: white;
        height: 25px;
    }
    10% {
        color: transparent;
    }
    85% {
        color: transparent;
    }
    100% {
        top: -12px;
        left: 60px;
        background-color: #ff0000;
        color: black;
    }
}
</style>
