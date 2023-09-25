<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { FigthCompetitor as FC } from '../Interfaces';
import FigthCompetitor from '../components/Competitors/FigthCompetitor.vue'
import FigthButtonsPannel from '../components/Buttons/FigthButtonsPannel.vue'
import TimerControllPannel from '../components/Buttons/TimerControllPannel.vue';
import Timer from '../components/Timer/Timer.vue'

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

</script>

<template>
    <main class="h-screen">
        <section id="competitors" class="w-screen flex h-5/6">
            <FigthCompetitor v-for="(competitor, index) in competitors" :key="index" :competitor="competitor"/>
            <div class="timer-frame h-20 w-64
                flex justify-center items-center text-4xl font-bold
                mt-2 bg-gray-500 border-8
                border-b-neutral-800 border-t-stone-500
                border-l-neutral-600 border-r-neutral-600">
                <Timer ref="timer" id="timer" />
                <!--vue-countdown :time="time" v-slot="{ minutes, seconds}" :auto-start="false" ref="timer"
                    @progress="listenTimer" @abort="onPause">
                    {{ minutes.toString().padStart(2, "0") }}:{{ seconds.toString().padStart(2, "0") }}
                </vue-countdown-->
            </div>
        </section>
        <section id="control-panel" class="w-screen flex h-1/6">
            <TimerControllPannel  :timer="timer"/>
            
            <FigthButtonsPannel id="panel_control" v-for="(competitor, index) in competitors" :key="index" :competitor="competitor" />
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
