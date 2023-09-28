<script lang="ts" setup>
import { computed } from 'vue';
import { FigthCompetitor } from '../../Interfaces'

const props = defineProps<{
    competitor: FigthCompetitor
}>()
const classnames = computed(() => 
    props.competitor.points !== undefined?
        `bg-${props.competitor.color}` :
        `border-${props.competitor.color}`
)
</script>

<template>
    <div class="h-full w-1/2 competitor-section flex justify-center grid content-center" 
        :class="classnames">
        {{ competitor.points }}
        <footer class="w-full flex gap-64 justify-center">
            <v-icon
                v-for="(bann, index) in competitor.banns" :key="index" 
                name="io-close" scale="4" />
        </footer>
    </div>
</template>

<style lang="css" scoped>

div {
    font-size: 124pt;
}

path {
    display: inline;
}
.competitor-section {
    position: relative;
}

footer {
    position: absolute;
    bottom: 15px;
}

.bg-red {
    background-color: rgb(239 68 68);
}


.border-red {
    border: 1px solid rgb(239 68 68);
}

.border-black {
    border: 3px solid black;
}
</style>
