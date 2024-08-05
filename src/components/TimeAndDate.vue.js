import { ref, onMounted } from 'vue';
import { isDateChanged } from '@/methods/isDateChanged';
import { weekday_Ua } from '/src/data/weekday_Ua.js';
import { month_Ua } from '/src/data/month_Ua.js';
import SmallPopup from '../views/SmallPopup.vue';
import ManualTimeSet from '../components/ManualTimeSet.vue';
import { useMainStore } from '../stores/mainStore.ts';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useMainStore();
const is_animate = ref(!localStorage.getItem('is_date_changed'));
const isTimeSettingOpen = ref(false);
const weekDay = ref();
const date = ref('');
const time = ref('');
const updateTime = () => {
    const dateNow = new Date();
    const manualData = parseInt(localStorage.getItem('manualData'));
    let dateValue;
    if (manualData && !isNaN(manualData)) {
        if (Math.sign(manualData) === -1) {
            dateValue = new Date(dateNow.getTime() + parseInt(manualData.toString().slice(1)));
        }
        else {
            dateValue = new Date(dateNow.getTime() - manualData);
        }
    }
    else {
        dateValue = dateNow;
    }
    time.value = dateValue.toLocaleTimeString(store.timeFormat);
    weekDay.value = dateValue.getDay();
    const day = dateValue.getDate();
    const month = dateValue.getMonth();
    const year = dateValue.getFullYear();
    date.value = `${day.toString().padStart(2, '0')} ${month_Ua[month]} ${year}`;
};
onMounted(() => {
    updateTime();
    setInterval(updateTime, 1000);
    isDateChanged();
});
const openTimeSettings = () => {
    localStorage.setItem('is_date_changed', 'true');
    is_animate.value = false;
    isTimeSettingOpen.value = true;
};
const closeTimeSettings = () => {
    event.stopPropagation();
    isTimeSettingOpen.value = false;
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.openTimeSettings();
                // @ts-ignore
                [openTimeSettings,];
            } }, ...{ class: (({ animation: __VLS_ctx.is_animate, component_wrapper: true })) }, });
    __VLS_styleScopedClasses = ({ animation: is_animate, component_wrapper: true });
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
    if (__VLS_ctx.isTimeSettingOpen) {
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
                if (!((__VLS_ctx.isTimeSettingOpen)))
                    return;
                __VLS_ctx.closeTimeSettings();
                // @ts-ignore
                [is_animate, isTimeSettingOpen, closeTimeSettings,];
            }
        };
        const __VLS_10 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(SmallPopup, __VLS_7));
        let __VLS_8;
        let __VLS_9;
        // @ts-ignore
        [ManualTimeSet,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(ManualTimeSet, new ManualTimeSet({ ...{ 'onClosePopup': {} }, }));
        const __VLS_14 = __VLS_13({ ...{ 'onClosePopup': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ 'onClosePopup': {} }, }));
        let __VLS_18;
        const __VLS_19 = {
            onClosePopup: (...[$event]) => {
                if (!((__VLS_ctx.isTimeSettingOpen)))
                    return;
                __VLS_ctx.closeTimeSettings();
                // @ts-ignore
                [closeTimeSettings,];
            }
        };
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ManualTimeSet, __VLS_14));
        let __VLS_15;
        let __VLS_16;
        __VLS_nonNullable(__VLS_10.slots).default;
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("date_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("week_day") }, });
    (__VLS_ctx.weekday_Ua[__VLS_ctx.weekDay]);
    // @ts-ignore
    [weekday_Ua, weekDay,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("date") }, });
    (__VLS_ctx.date);
    // @ts-ignore
    [date,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("time_wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), id: ("Layer_1"), "data-name": ("Layer 1"), viewBox: ("0 0 24 24"), width: ("16"), height: ("16"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-21C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.963,3,12,3Zm4,8h-3V6h-3V14h6v-3Z"), });
    (__VLS_ctx.time);
    // @ts-ignore
    [time,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['settings_popup'];
        __VLS_styleScopedClasses['date_wrapper'];
        __VLS_styleScopedClasses['week_day'];
        __VLS_styleScopedClasses['date'];
        __VLS_styleScopedClasses['time_wrapper'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                weekday_Ua: weekday_Ua,
                SmallPopup: SmallPopup,
                ManualTimeSet: ManualTimeSet,
                is_animate: is_animate,
                isTimeSettingOpen: isTimeSettingOpen,
                weekDay: weekDay,
                date: date,
                time: time,
                openTimeSettings: openTimeSettings,
                closeTimeSettings: closeTimeSettings,
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
