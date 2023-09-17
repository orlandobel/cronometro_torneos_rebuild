<script lang="ts" setup>
import CompetitionButton from "../components/Buttons/CompetitionButton.vue";
</script>

<template>
  <div class="h-screen">
    <div class="h-2/6 flex justify-center">
      <img src="../assets/images/asociacion_zacatecas.png" class="h-full" />
    </div>
    <div class="columns-3 gap-16 mx-32">
      <CompetitionButton route="kata-comp" image_name="forma_btn" self_align="end" />
      <CompetitionButton route="kata-comp" image_name="puntos_btn" self_align="center" />
      <CompetitionButton route="kata-comp" image_name="continua_btn" self_align="start" />
    </div>
  </div>
</template>

<style scoped></style>
