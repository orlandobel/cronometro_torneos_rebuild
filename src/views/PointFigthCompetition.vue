<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { FigthCompetitor as FC } from '../Interfaces';
import FigthCompetitor from '../components/Competitors/FigthCompetitor.vue'
import FigthButtonsPannel from '../components/Buttons/FigthButtonsPannel.vue'
import TimerControllPannel from '../components/Buttons/TimerControllPannel.vue';
import Timer from '../components/Timer/Timer.vue'
import PanelControll from '../components/Timer/PanelControll.vue'
import { invoke } from '@tauri-apps/api/tauri';

const competitors: Ref<FC[]> = ref([
    {
        color: 'red',
        banns: 0,
        points: 0,
    },
    {
        color: 'black',
        banns: 0,
        points: 0,
    }
])

const timer = ref<InstanceType<typeof Timer> | null>(null)
const timer_panel = ref<any>(null)
const panel_control = ref<any>(null)

const onRestart = () => {
    competitors.value[0].points = 0
    competitors.value[1].points = 0

    competitors.value[0].banns = 0
    competitors.value[1].banns = 0
}

const onTimerEnd = () => timer_panel.value?.changeTimer()

const onUpdatePoints = () => {
    const points1 = competitors.value[0].points!
    const points2 = competitors.value[1].points!

    if(Math.abs(points1 - points2) === 5) {
        timer_panel.value?.changeTimer()
        invoke('play_bell')
        invoke('stop_sound')
    }
}

const onEndByBanns = () => {
    timer_panel.value?.changeTimer()
    invoke('play_bell')
    invoke('stop_sound')
}

const update_time = (time: number) => timer.value?.set_time(time)

</script>

<template>
    <main class="h-screen">
        <PanelControll ref="panel_control" @update_time="update_time"/>
        <section id="competitors" class="w-screen flex h-5/6">
            <FigthCompetitor v-for="(competitor, index) in competitors" :key="index" :competitor="competitor"/>
            <div class="timer-frame h-20 w-64
                flex justify-center items-center text-4xl font-bold
                mt-2 bg-gray-500 border-8
                border-b-neutral-800 border-t-stone-500
                border-l-neutral-600 border-r-neutral-600">

                <Timer ref="timer" id="timer" @end="onTimerEnd" />
            </div>
        </section>
        <section id="control-panel" class="w-screen flex h-1/6">
            <TimerControllPannel  :timer="timer" ref="timer_panel" 
                @restart="onRestart"
                @show_timer_panel="panel_control.change_display()"/>
            
            <FigthButtonsPannel id="panel_control" v-for="(competitor, index) in competitors" :key="index" :competitor="competitor" 
                @update-points="onUpdatePoints"
                @end-by-banns="onEndByBanns"/>
        </section>
    </main>
</template>

<style lang="css" scoped>
.timer-frame {
    z-index: 111;
    position: absolute;
    left: 50%;
    right: 50%;

    transform: translate(-50%, 0%);
}
</style>
