<script lang="ts" setup>
const props = defineProps<{
    image_name: string
    self_align: string
    route: string
}>()

const image = new URL(`../../assets/images/${props.image_name}.png`, import.meta.url).toString()
const justify_class = `justify-${props.self_align}`
</script>

<template>
    <RouterLink :to="{name: props.route}" class="flex w-full">
            <img :src="image" class="w-full">
    </RouterLink>
</template>

<style scoped></style>
