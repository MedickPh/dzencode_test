<template>
    <div class="side_wrapper">
        <div class="user_wrapper">
            <div class="user_img">
                <img src="/user.webp" alt="" />
                <button class="user_settings" @click="openUserSettings = true">
                    <img src="/question.webp" alt="" />
                </button>
            </div>
            <transition name="fade">
                <div class="settings_popup" v-if="openUserSettings">
                    <SmallPopup @closePopup="openUserSettings = false">
                        {{ $t('navigation.user_settings') }}
                    </SmallPopup>
                </div>
            </transition>
            <h2 class="user_name">User Name</h2>
        </div>
        <Navigation />
    </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
import SmallPopup from '../views/SmallPopup.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

import { ref } from 'vue'

const openUserSettings = ref(false)
</script>

<style scoped lang="scss">
.side_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 100px;
    -webkit-box-shadow: 4px 0px 8px -5px rgb(0, 0, 0);
    -moz-box-shadow: 4px 0px 8px -5px rgb(0, 0, 0);
    box-shadow: 4px 0px 8px -5px rgb(0, 0, 0);
    .user_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-bottom: 100px;

        .user_img {
            position: relative;

            img {
                width: 100%;
                max-width: 125px;
            }

            .user_settings {
                background: transparent;
                position: absolute;
                bottom: -5px;
                right: -15px;
                border: none;
                outline: none;
                padding: 0;
                margin-right: 5px;
                img {
                    width: 100%;
                    max-width: 35px;
                }
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
            top: 10px;
            right: -160px;
            cursor: auto;
            z-index: 99;
        }
        .user_name {
            margin: 15px 0;
        }
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
        top: 10px;
        right: 250px;
    }
    80% {
        opacity: 1;
        right: -200px;
    }
    100% {
        opacity: 1;
        top: 10px;
        right: -160px;
    }
}
@keyframes crawl_out {
    0% {
        opacity: 1;
        top: 10px;
        right: -160px;
    }
    100% {
        opacity: 0;
        top: 10px;
        right: 250px;
    }
}
</style>
