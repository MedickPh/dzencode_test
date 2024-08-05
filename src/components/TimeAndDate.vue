<template>
    <!-- Неправильно прочитал тз в спешке и вместо "4. Создать компонент TopMenu, в котором необходимо вывести дату и время"
    прочитал как "4. Создать компонент TopMenu, в котором необходимо ВВЕСТИ дату и время". А прочитал правильно уже ка сделал ввод даты и времени. 
    -->
    <div :class="{ animation: is_animate, component_wrapper: true }" @click="openTimeSettings()">
        <transition name="fade">
            <div class="settings_popup" v-if="isTimeSettingOpen">
                <SmallPopup @closePopup="closeTimeSettings()">
                    <ManualTimeSet @closePopup="closeTimeSettings()" />
                </SmallPopup>
            </div>
        </transition>
        <div class="date_wrapper">
            <p class="week_day">{{ weekday_Ua[weekDay] }}</p>
            <p class="date">{{ date }}</p>
        </div>
        <div class="time_wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="16"
                height="16"
            >
                <path
                    d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-21C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.963,3,12,3Zm4,8h-3V6h-3V14h6v-3Z"
                />
            </svg>

            {{ time }}
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { isDateChanged } from '@/methods/isDateChanged'
import { weekday_Ua } from '/src/data/weekday_Ua.js'
import { month_Ua } from '/src/data/month_Ua.js'
import SmallPopup from '../views/SmallPopup.vue'
import ManualTimeSet from '../components/ManualTimeSet.vue'
import { useMainStore } from '../stores/mainStore.ts'
const store = useMainStore()

const is_animate = ref(!localStorage.getItem('is_date_changed'))
const isTimeSettingOpen = ref(false)
const weekDay = ref()
const date = ref('')
const time = ref('')
// Вывод времени
const updateTime = () => {
    const dateNow = new Date()
    const manualData = parseInt(localStorage.getItem('manualData'))
    let dateValue
    // Проверяю задано ли время вручную, если да то использую его если нет то текущее
    if (manualData && !isNaN(manualData)) {
        if (Math.sign(manualData) === -1) {
            dateValue = new Date(dateNow.getTime() + parseInt(manualData.toString().slice(1)))
        } else {
            dateValue = new Date(dateNow.getTime() - manualData)
        }
    } else {
        dateValue = dateNow
    }

    time.value = dateValue.toLocaleTimeString(store.timeFormat)
    weekDay.value = dateValue.getDay()
    const day = dateValue.getDate()
    const month = dateValue.getMonth()
    const year = dateValue.getFullYear()

    date.value = `${day.toString().padStart(2, '0')} ${month_Ua[month]} ${year}`
}

onMounted(() => {
    updateTime()
    setInterval(updateTime, 1000)
    isDateChanged()
})

const openTimeSettings = () => {
    localStorage.setItem('is_date_changed', 'true')
    is_animate.value = false
    isTimeSettingOpen.value = true
}
const closeTimeSettings = () => {
    event.stopPropagation()
    isTimeSettingOpen.value = false
}
</script>

<style scoped lang="scss">
.component_wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 250px;
    cursor: pointer;
    position: relative;

    .date_wrapper {
        width: 100%;
        margin: 0 10px;

        .week_day {
            font-size: 1.2rem;
        }
    }

    .time_wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        svg {
            margin-right: 10px;
        }
    }
    .settings_popup {
        position: absolute;
        width: 100%;
        max-width: 235px;
        padding: 10px 15px;
        background-color: #fff;
        border: 2px solid #bdbdbd;
        border-radius: 15px;
        top: 65px;
        right: 5px;
        cursor: auto;
        z-index: 99;
    }
}
.animation::before {
    content: '';
    position: absolute;
    border: 2px solid #b4b4b5;
    left: 0px;
    opacity: 0;
    right: 0px;
    top: 0px;
    bottom: 0px;
    animation: pulse 1.5s linear infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: scale(1.2);
        opacity: 0;
    }
}

.fade-enter-active {
    animation: crawl_in 0.5s;
}

.fade-leave-active {
    animation: crawl_out 0.5s;
}

@keyframes crawl_in {
    0% {
        opacity: 0;
        top: 65px;
        right: -250px;
    }
    80% {
        opacity: 1;
        right: 20px;
    }
    100% {
        opacity: 1;
        top: 65px;
        right: 5px;
    }
}
@keyframes crawl_out {
    0% {
        opacity: 1;
        top: 65px;
        right: 5;
    }
    100% {
        opacity: 0;
        top: 65px;
        right: -250px;
    }
}
</style>
