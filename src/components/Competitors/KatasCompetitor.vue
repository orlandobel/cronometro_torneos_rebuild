<script lang="ts" setup>
import { ref } from 'vue'
import { KataCompetitor } from '../../Interfaces';

const props = defineProps<{
    base: number
    competitor: KataCompetitor
    id:Number
}>()

const total = ref(0)

const update_score = () => {
    const c1 = Number(`${props.base}.${props.competitor.cal1}`)
    const c2 = Number(`${props.base}.${props.competitor.cal2}`)
    const c3 = Number(`${props.base}.${props.competitor.cal3}`)

    props.competitor.total = Number((c1+c2+c3).toFixed(1))
}

</script>

<template>
    <div class="flex my-4">
        <div class="w-3/5 mr-6">
            <input type="text" name="nombre" :id="props.id+'-name'" placeholder="Nombre del competidor"
            v-model="props.competitor.name"
            class="w-full border-neutral-500 bg-transparent border-b" />
        </div>
        
        <div class="w-2/5 flex">
            <div class="mx-2">
                <span class="border-neutral-500 border-b w-2/3 content-center h-full ps-2">
                    <label :for="'cal1-'+props.id">{{ $props.base }}.</label>
                    <input type="number" :name="'cal1-'+props.id" :id="'cal1-'+props.id" v-model="props.competitor.cal1"
                        maxlength="1" @change="update_score"
                        onfocus="this.value = ''" :onblur="'this.value =' + props.competitor.cal1"
                        class="w-6 bg-transparent calif" />
                </span>
            </div>
            <div class="mx-2">
                <span class="border-neutral-500 border-b w-2/3 content-center h-full ps-2">
                    <label :for="'cal2-'+props.id">{{ $props.base }}.</label>
                    <input type="number" :name="'cal2-'+props.id" :id="'cal2-'+props.id" v-model="props.competitor.cal2"
                        maxlength="1" @change="update_score"
                        onfocus="this.value = ''" :onblur="'this.value =' + props.competitor.cal2"
                        class="w-6 bg-transparent calif" />
                </span>
            </div>
            <div class="mx-2">
                <span class="border-neutral-500 border-b w-2/3 content-center h-full ps-2">
                    <label :for="'cal3-'+props.id">{{ $props.base }}.</label>
                    <input type="number" :name="'cal3-'+props.id" :id="'cal3-'+props.id" v-model="props.competitor.cal3"
                        maxlength="1" @change="update_score"
                        onfocus="this.value = ''" :onblur="'this.value =' + props.competitor.cal3"
                        class="w-6 bg-transparent calif" />
                </span>
            </div>
            
            <div class="mx-2">
                <span class="w-2/3 h-full flex">
                    {{ props.competitor.total }}
                </span>
            </div>
            
        </div>
    </div>
</template>

<style lang="css" scoped>
input:focus {
    outline: none;
}
</style>
