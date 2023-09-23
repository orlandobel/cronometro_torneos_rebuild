<script lang="ts" setup>
import { watchEffect, onMounted, computed } from "vue"
import { useTimer } from 'vue-timer-hook'

const time = new Date()
time.setSeconds(time.getSeconds() + 60)
const timer = useTimer(time, false)

const seconds = computed(() => timer.seconds.value.toString().padStart(2, "0"))
const minutes = computed(() => timer.minutes.value.toString().padStart(2, "0"))

defineExpose({
    time,
    timer
})
</script>

<template>
    <span> {{ minutes }}:{{ seconds }} </span>
</template>

<style lang="css" scoped>
span {
    z-index: 111;
}
</style>
