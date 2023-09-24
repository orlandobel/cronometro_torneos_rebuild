<script lang="ts" setup>
import { FigthCompetitor } from '../../Interfaces';


const props = defineProps<{
    competitor: FigthCompetitor
}>()

const updatePoints = (points: number) => {
    if(props.competitor.points! === 0 && points === -1) return
    props.competitor.points! += points
}

const updateBanns = (bann: number) => {
    if(props.competitor.banns === 0 && bann === -1) return
    if(props.competitor.banns === 3 && bann === 1) return
    props.competitor.banns += bann
}
</script>

<template>
    <div class="h-full flex justify-center w-1/2">
        <div class="button-group grid content-top gap-y-0 justify-center h-full pt-8 w-1/2" >
            <label class="h-fit text-center m-0">Puntuacion</label>
            <div class="flex justify-center gap-4 h-full m-0">
                <button class="w-16 h-16 border border-neutral-200"
                    @click="updatePoints!(1)">
                    <v-icon
                        name="hi-solid-plus"
                        scale="1.8" />
                </button>
                <button class="w-16 h-16  border border-neutral-200"
                    @click="updatePoints(-1)">
                    <v-icon
                        name="hi-solid-minus"
                        scale="1.8" />
                </button>
            </div>
        </div>
        <div class="button-group grid justify-center pt-8 w-1/2">
            <label class="h-fit text-center m-0">Amonestaciones</label>
            <div class="flex justify-center gap-4 h-full m-0">
                <button class="w-16 h-16 border border-neutral-200"
                    @click="updateBanns(1)" >
                    <v-icon
                        name="hi-solid-plus"
                        scale="1.8" />
                </button>
                <button class="w-16 h-16  border border-neutral-200"
                    @click="updateBanns(-1)">
                    <v-icon
                        name="hi-solid-minus"
                        scale="1.8" />
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>

.button-group > div {
    position: relative;
    bottom: 1rem
}
</style>
