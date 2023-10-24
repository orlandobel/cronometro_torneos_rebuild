<script lang="ts" setup>
import { ref, computed } from 'vue'

const show = ref(false)
const show_class = computed(() => show.value? '' : 'translate-x-full')
const container_class = computed(() => show.value? '' : 'hide')

const change_display = () => show.value = !show.value
const update_time = (time: number) => {
    emit('update_time', time)
}

defineExpose({
    change_display
})

const emit = defineEmits<{
    'update_time': [time: number]
}>();
</script>

<template>
    <section class="sidebar-container">
        <div class="fixed z-40 w-full h-full" :class="container_class" @click="change_display"></div>
        <aside id="timer-panel" class="fixed top-0 right-0 z-40 w-96 h-full p-4 
        overflow-y-auto transition-transform bg-neutral-800 border-l-2 border-stone-700"
        :class="show_class">
        <header id="timer-panel-label" class="flex justify-center text-2xl font-bold">
            CONFIGUACIÓN DEL RELOJ
        </header>
        <ul class="p-4 text-2xl font-bold underline decoration-solid">
            <li class="my-2"><a @click="update_time(30000)" class="underline hover:decoration-double">00:30</a></li>
            <li class="my-2"><a @click="update_time(60000)" class="underline hover:decoration-double">01:00</a></li>
            <li class="my-2"><a @click="update_time(90000)" class="underline hover:decoration-double">01:30</a></li>
            <li class="my-2"><a @click="update_time(120000)" class="underline hover:decoration-double">02:00</a></li>
        </ul>
    </aside>
    </section>
</template>

<style lang="css" scoped>
.hide {
    display: none;
} 
</style>
