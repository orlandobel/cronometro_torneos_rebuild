<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { UseTimer } from 'vue-timer-hook'

const runingTimer: Ref<Boolean> = ref(false)
const animation: Ref<string> = ref('')
const icon = ref('bi-play')

const props = defineProps<{
    time: Date | undefined,
    timer: UseTimer | undefined
}>()

const changeTimer = () => {
    animation.value = 'flash'
    if(runingTimer.value) props.timer?.pause()
    else props.timer?.start()

    setTimeout(() => {
        runingTimer.value = !runingTimer.value
        if(runingTimer.value) icon.value = 'bi-pause'
        else icon.value = 'bi-play'
    }, 250)
    setTimeout(() => {
        animation.value = ''
    }, 500)


}

</script>

<template>
    <div class="w-96 h-40 mt-1 grid items-center main-container">
        <div class="flex gap-4 justify-center">
            <button class="w-16 h-16 border border-neutral-200"
                @click="changeTimer()">
                <v-icon 
                    :name="icon"
                    :animation="animation"
                    speed="fast"
                    scale="2" />

                <!--v-icon v-else
                    name="bi-play"
                    :animation="animation"
                    speed="slow"
                    scale="2"/-->

            </button>
            <RouterLink class="w-16 h-16 border border-neutral-200 flex items-center justify-center"
                :to="{ name: 'home' }">
                <v-icon
                    name="la-home-solid"
                    scale="1.5"/>
            </RouterLink>
            <!--button class="w-16 h-16 border border-neutral-200">
                
            </button-->
        </div>
        <div class="flex gap-4 justify-center">
            <button class="w-16 h-16 border border-neutral-200">
                <v-icon
                name="md-restartalt"
                scale="1.8"/>
            </button>
            <button class="w-16 h-16 border border-neutral-200">
                <v-icon
                    name="la-bars-solid"
                    scale="1.8"/>
            </button>
        </div>
    </div>
</template>

<style lang="css" scoped>
.main-container {
    position: absolute;
    
    left: 50%;
    right: 50%;

    transform: translate(-50%, 0%);
}
</style>
