<script setup lang="ts">
import { ref, computed } from 'vue'
import Home from './views/Home.vue'
import KatasCompetition from './views/KatasCompetition.vue'

const routes: object = {
  '/': Home,
  '/katas': KatasCompetition
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const curretnView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})

</script>

<template>
  <div class="container mx-auto ">
    <component :is="curretnView" />
  </div>
</template>

<style scoped>

</style>
