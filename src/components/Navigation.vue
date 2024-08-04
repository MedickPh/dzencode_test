<template>
    <nav>
        <RouterLink
            to="/orders"
            active-class="active"
            @mouseover="hoverAnimation = 'orders'"
            @mouseleave="hoverAnimation = null"
            :class="{
                hover_animation: hoverAnimation === 'orders'
            }"
            >{{ $t('navigation.orders') }}</RouterLink
        >
        <RouterLink
            to="/products"
            active-class="active"
            @mouseover="hoverAnimation = 'products'"
            @mouseleave="hoverAnimation = null"
            :class="{
                hover_animation: hoverAnimation === 'products'
            }"
            >{{ $t('navigation.products') }}</RouterLink
        >
        <RouterLink
            to="/groups"
            active-class="active"
            @mouseover="hoverAnimation = 'groups'"
            @mouseleave="hoverAnimation = null"
            :class="{
                hover_animation: hoverAnimation === 'groups'
            }"
            >{{ $t('navigation.groups') }}</RouterLink
        >
        <RouterLink
            to="/users"
            active-class="active"
            @mouseover="hoverAnimation = 'users'"
            @mouseleave="hoverAnimation = null"
            :class="{
                hover_animation: hoverAnimation === 'users'
            }"
            >{{ $t('navigation.users') }}</RouterLink
        >
        <RouterLink
            to="/settings"
            active-class="active"
            @mouseover="hoverAnimation = 'settings'"
            @mouseleave="hoverAnimation = null"
            :class="{
                hover_animation: hoverAnimation === 'settings'
            }"
            >{{ $t('navigation.settings') }}</RouterLink
        >
    </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const hoverAnimation = ref(null)
const route = useRoute()
</script>

<style scoped lang="scss">
nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
        color: black;
        position: relative;
        margin: 10px 0;
    }
    .hover_animation,
    .active {
        color: #69c2a2;
        transition: color 0.5s;
    }
    .hover_animation::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #69c2a2;
        width: 50%;
        height: 2px;
        animation: route_hover 0.5s ease-out;
    }
    .active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #69c2a2;
        width: 100%;
        height: 2px;
        animation: route_active 0.5s ease-out;
    }
}
@keyframes route_hover {
    0% {
        width: 0;
        height: 2px;
    }
    100% {
        width: 50%;
        height: 2px;
    }
}
@keyframes route_active {
    0% {
        width: 50%;
        height: 2px;
    }
    100% {
        width: 100%;
        height: 2px;
    }
}
</style>
