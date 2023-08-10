<script lang="ts" setup>
const props = defineProps<{
    image_name: string
    align: string
}>()

const image = new URL(`../../assets/images/${props.image_name}.png`, import.meta.url).toString()
const justify_class = `justify-${props.align}`
</script>

<template>
    <div class="h-full flex" :class="justify_class">
        <button >
            <img :src="image" class="h-full">
        </button>
    </div>
</template>

<style scoped>
button {
    --btn-size: 15vmax;

    width: var(--btn-size);
    height: var(--btn-size);
    
    background-color: white;
    border: solid black;
}

.justify-end {
    justify-content: flex-end;
}
</style>
