<script lang="ts" setup>
import CompetitionButton from "../components/Buttons/CompetitionButton.vue";
import { exit } from '@tauri-apps/api/process';

const _exit = async () => {
  await exit(1)
}
</script>

<template>
  <div class="h-screen">
    <div class="h-2/6 flex justify-center">
      <img src="../assets/images/asociacion_zacatecas.png" class="h-full" />
    </div>
    <div class="columns-3 gap-16 mx-32">
      <CompetitionButton route="kata-comp" image_name="forma_btn" self_align="end" />
      <CompetitionButton route="point-figth" image_name="puntos_btn" self_align="center" />
      <CompetitionButton route="continous-figth" image_name="continua_btn" self_align="start" />
      <button class="close-btn" @click="_exit">
        <v-icon
          name="bi-power"
          scale="3"/>
      </button>
    </div>
  </div>
</template>

<style scoped>
.close-btn {
  position: absolute;
  bottom: 20px;
  left: 30px;
}
</style>
