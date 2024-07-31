<template>
    <div :class="{ animation: is_animate, component_wrapper: true }">
        <div class="date_wrapper">
            <p class="week_day">{{ weekday_UA[day] }}</p>
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

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const is_animate = ref<boolean>(true)
const weekday_UA = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота']
const month_UA = [
    'Січня',
    'Лютого',
    'Березня',
    'Квітня',
    'Травня',
    'Червня',
    'Липня',
    'Серпня',
    'Вересня',
    'Жовтня',
    'Листопада',
    'Грудня'
]
const currentDate = new Date()
const day = currentDate.getDay()
const month = currentDate.getMonth()
const year = currentDate.getFullYear()
const date = `${day.toString().padStart(2, '0')} ${month_UA[month]} ${year}`
const time = ref('')
const updateTime = () => {
    const dateNow = new Date()
    time.value = dateNow.toLocaleTimeString()
    requestAnimationFrame(updateTime)
}
// const updateTime = () => {
//     const dateNow = new Date()
//     const hours = String(dateNow.getHours()).padStart(2, '0')
//     const minutes = String(dateNow.getMinutes()).padStart(2, '0')
//     const seconds = String(dateNow.getSeconds()).padStart(2, '0')
//     const milliseconds = String(dateNow.getMilliseconds()).padStart(3, '0')

//     time.value = `${hours}:${minutes}:${seconds}.${milliseconds}`

//     requestAnimationFrame(updateTime)
// }
const isDateChanged = () => {
    if (localStorage.getItem('is_date_changed')) {
        return
    }
    localStorage.setItem('is_date_changed', 'false')
}
onMounted(() => {
    updateTime()
    isDateChanged()
})
</script>

<style scoped lang="scss">
.component_wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 250px;

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
        svg {
            margin-right: 10px;
        }
    }
}
.animation {
    position: relative;
    &::before {
        content: '';
        position: absolute;
        border: 2px solid #b4b4b5;
        left: 0px;
        opacity: 0;
        right: 0px;
        top: 0px;
        bottom: 0px;
        animation: pulse 2.5s linear infinite;
    }
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
</style>
