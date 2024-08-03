<script setup>
import { RouterView } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import Header from './views/Header.vue'
import SideBlock from './views/SideBlock.vue'
import Loader from './components/Loader.vue'
import { useMainStore } from './stores/mainStore.ts'
import { orders, products } from './data/app.js'
const store = useMainStore()
const dataLoading = ref(true)
// Имитация получения данных с сервера
const getData = () => {
    store.setData({ orders, products })
    setTimeout(() => {
        dataLoading.value = false
    }, 2500)
}
onBeforeMount(getData)
</script>

<template>
    <Transition name="loader">
        <Loader v-if="dataLoading" />
    </Transition>
    <Header />
    <div class="main_content_wrapper">
        <SideBlock />
        <div class="main_content">
            <Transition name="router">
                <RouterView />
            </Transition>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main_content_wrapper {
    display: flex;
    flex-direction: row;
    .side_wrapper {
        width: 100%;
        max-width: 200px;
        min-width: 165px;
        height: calc(100vh - 60px);
    }
    .main_content {
        width: 100%;
        max-width: 100%;
        position: relative;
        margin: 15px;
    }

    .router-enter-active {
        animation: opacity_animation 1.5s;
    }

    .router-leave-active {
        animation: opacity_animation 1.5s reverse;
    }
}
.loader-enter-active {
    animation: opacity_animation 1s;
}
.loader-leave-active {
    animation: opacity_animation 1s reverse;
}
</style>
