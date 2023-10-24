<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { invoke } from '@tauri-apps/api'

const timer: Ref<any> = ref(null)

let originTime = 60000
const time = ref(originTime)
const remain = ref(originTime)

const start = () => timer.value?.start()
const pause = () => timer.value?.abort()
const restart = () => {
    remain.value = originTime
    time.value = originTime
    timer.value?.restart()
    timer.value?.abort()
}
const set_time = (new_time: number) => {
    remain.value = new_time
    time.value = new_time
    originTime = new_time
}

const playBeep = () => invoke('play_beep')
const playBell = () => invoke('play_bell')

const listenTimer = (event: any) => {
    const ms = event.seconds * 1000
    remain.value = ms

    if(ms > 0 && ms <= 10000) playBeep()
    else if(ms === 0) {
        playBell()
        emit('end')
    }
    invoke('stop_sound')
}

const onPause = () => time.value = remain.value

defineExpose({
    start,
    pause,
    restart,
    set_time,
})

const emit = defineEmits<{
    'end': []
}>()
</script>

<template>
    <vue-countdown :time="time" v-slot="{ minutes, seconds}" :auto-start="false" ref="timer"
        @progress="listenTimer" @abort="onPause">
        {{ minutes.toString().padStart(2, "0") }}:{{ seconds.toString().padStart(2, "0") }}
    </vue-countdown>
</template>

<style lang="css" scoped>
span {
    z-index: 11;
}
</style>
