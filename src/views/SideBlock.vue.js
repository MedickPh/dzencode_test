import Navigation from '../components/Navigation.vue';
import SmallPopup from '../views/SmallPopup.vue';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const openUserSettings = ref(false);
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("side_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user_img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/user.webp"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.openUserSettings = true;
                // @ts-ignore
                [openUserSettings,];
            } }, ...{ class: ("user_settings") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/question.webp"), alt: (""), });
    // @ts-ignore
    const __VLS_0 = {}
        .transition;
    ({}.transition);
    ({}.transition);
    __VLS_components.Transition;
    __VLS_components.transition;
    __VLS_components.Transition;
    __VLS_components.transition;
    // @ts-ignore
    [Transition, Transition,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("fade"), }));
    const __VLS_2 = __VLS_1({ name: ("fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ name: ("fade"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    if (__VLS_ctx.openUserSettings) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("settings_popup") }, });
        // @ts-ignore
        [SmallPopup, SmallPopup,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(SmallPopup, new SmallPopup({ ...{ 'onClosePopup': {} }, }));
        const __VLS_7 = __VLS_6({ ...{ 'onClosePopup': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        ({}({ ...{ 'onClosePopup': {} }, }));
        let __VLS_11;
        const __VLS_12 = {
            onClosePopup: (...[$event]) => {
                if (!((__VLS_ctx.openUserSettings)))
                    return;
                __VLS_ctx.openUserSettings = false;
                // @ts-ignore
                [openUserSettings, openUserSettings,];
            }
        };
        const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(SmallPopup, __VLS_7));
        let __VLS_8;
        let __VLS_9;
        (__VLS_ctx.$t('navigation.user_settings'));
        // @ts-ignore
        [$t,];
        __VLS_nonNullable(__VLS_10.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("user_name") }, });
    // @ts-ignore
    [Navigation,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(Navigation, new Navigation({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Navigation, __VLS_14));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['side_wrapper'];
        __VLS_styleScopedClasses['user_wrapper'];
        __VLS_styleScopedClasses['user_img'];
        __VLS_styleScopedClasses['user_settings'];
        __VLS_styleScopedClasses['settings_popup'];
        __VLS_styleScopedClasses['user_name'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Navigation: Navigation,
                SmallPopup: SmallPopup,
                openUserSettings: openUserSettings,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
