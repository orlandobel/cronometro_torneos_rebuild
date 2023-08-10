<script lang="ts" setup>
import CompetitionButton from "../components/Buttons/CompetitionButton.vue";
</script>

<template>
  <div class="h-screen">
    <div class="h-2/5 flex justify-center">
      <img src="../assets/images/asociacion_zacatecas.png" class="h-full" />
    </div>
    <div class="columns-3">
      <CompetitionButton image_name="forma_btn" align="end" />
      <CompetitionButton image_name="puntos_btn" align="center" />
      <CompetitionButton image_name="continua_btn" align="start" />
    </div>
  </div>
</template>

<style scoped></style>
