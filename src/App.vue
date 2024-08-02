<script setup>
import { RouterView } from 'vue-router'
import Header from './views/Header.vue'
import SideBlock from './views/SideBlock.vue'
</script>

<template>
    <Header />
    <div class="main_content">
        <SideBlock />
        <RouterView />
    </div>
</template>

<style scoped lang="scss">
.main_content {
    display: flex;
    flex-direction: row;
    .side_wrapper {
        width: 100%;
        max-width: 200px;
        min-width: 165px;
        height: calc(100vh - 60px);
    }
}
</style>
