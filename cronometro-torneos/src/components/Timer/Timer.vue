<script lang="ts" setup>
import { Ref, ref } from 'vue'

const timer: Ref<any> = ref(null)

const time = ref(60000)
const remain = ref(6000)

const start = () => timer.value?.start()
const pause = () => timer.value?.abort()

const listenTimer = (event: any) => {
    const ms = event.seconds * 1000
    remain.value = ms
}

const onPause = () => time.value = remain.value

defineExpose({
    start,
    pause
})
</script>

<template>
    <vue-countdown :time="time" v-slot="{ minutes, seconds}" :auto-start="false" ref="timer"
        @progress="listenTimer" @abort="onPause">
        {{ minutes.toString().padStart(2, "0") }}:{{ seconds.toString().padStart(2, "0") }}
    </vue-countdown>
</template>

<style lang="css" scoped>
span {
    z-index: 111;
}
</style>
