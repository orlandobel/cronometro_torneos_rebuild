<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { FigthCompetitor as FC} from '../Interfaces'
import FigthCompetitor from '../components/Competitors/FigthCompetitor.vue'
import FigthButtonsPannel from '../components/Buttons/FigthButtonsPannel.vue'
import TimerControllPannel from '../components/Buttons/TimerControllPannel.vue';
import Timer from '../components/Timer/Timer.vue'
import { invoke } from '@tauri-apps/api/tauri';

const competitors: Ref<FC[]> = ref([
    {
        color: 'red',
        banns: 0,
    },
    {
        color: 'black',
        banns: 0,
    }
])

const timer = ref<InstanceType<typeof Timer> | null>(null)
const timer_panel = ref<any>(null)

const onRestart = () => {
    competitors.value[0].banns = 0
    competitors.value[1].banns = 0
}

const onTimerEnd = () => timer_panel.value?.changeTimer()

const onEndByBanns = () => {
    timer_panel.value?.changeTimer()
    invoke('play_bell')
    invoke('stop_sound')
}
</script>

<template>
    <main class="h-screen">
        <section id="competitors" class="w-screen flex h-5/6">
            <FigthCompetitor v-for="(competitor, index) in competitors" :key="index" :competitor="competitor"/>
            <div class="timer-frame h-20 w-64
                flex justify-center items-center text-4xl font-bold
                mt-2">

                <Timer ref="timer" id="timer" @end="onTimerEnd" />
            </div>
        </section>
        <section id="control-panel" class="w-screen flex h-1/6">
            <TimerControllPannel  :timer="timer" ref="timer_panel" @restart="onRestart"/>
            
            <FigthButtonsPannel id="panel_control" v-for="(competitor, index) in competitors" :key="index" :competitor="competitor" 
                @end-by-banns="onEndByBanns"/>
        </section>
    </main>
</template>

<style lang="css" scoped>
.timer-frame {
    background-color: #232323;
    z-index: 111;
    position: absolute;
    
    top: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -150%);

    border-top: 3px solid;
    border-bottom: 3px solid;
    border-image: linear-gradient(to right, rgb(239 68 68) 50%, black 50%) 100% 1;
}
</style>
