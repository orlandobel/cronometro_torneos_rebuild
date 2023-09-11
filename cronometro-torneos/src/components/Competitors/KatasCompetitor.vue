<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps<{
    base: number
    competitor: number
}>()

const cal1 = ref(0)
const cal2 = ref(0)
const cal3 = ref(0)

const total = computed(() => {
    const c1 = Number(`${props.base}.${cal1.value}`)
    const c2 = Number(`${props.base}.${cal2.value}`)
    const c3 = Number(`${props.base}.${cal3.value}`)

    return c1+c2+c3
})

</script>

<template>
    <div class="flex my-4">
        <div class="w-4/5 mr-6">
            <input type="text" name="nombre" :id="props.competitor+'-name'" placeholder="Nombre del competidor"
            class="w-full border-neutral-500 bg-transparent border-b" />
        </div>

        <div class="w-1/5 flex">
            <div class="mx-2">
                <span class="border-neutral-500 border-b w-2/3 content-center h-full ps-2">
                    {{ $props.base }}.
                    <input type="number" name="cal1" id="cal1" v-model="cal1"
                        class="w-6 bg-transparent calif" />
                </span>
            </div>
            <div class="mx-2">
                <span class="border-neutral-500 border-b w-2/3 content-center h-full ps-2">
                    {{ $props.base }}.
                    <input type="number" name="cal1" id="cal1" v-model="cal2"
                        class="w-6 bg-transparent calif" />
                </span>
            </div>
            <div class="mx-2">
                <span class="border-neutral-500 border-b w-2/3 content-center h-full ps-2">
                    {{ $props.base }}.
                    <input type="number" name="cal1" id="cal1" v-model="cal3"
                        class="w-6 bg-transparent calif" />
                </span>
            </div>
            
            <div class="mx-2">
                <span class="w-2/3 h-full flex" :id="props.competidor+'-total'">
                    {{ total }}
                </span>
            </div>
            
        </div>
    </div>
</template>

<style lang="css" scoped></style>
