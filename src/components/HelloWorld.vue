<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="d-flex ali\gn-center justify-center fill-height">
        <v-btn to="/SelectSong" variant="outlined">
          選曲ランダム画面
        </v-btn>
        <v-btn to="/RegistSong" variant="outlined">
          曲の登録画面
        </v-btn>
        <v-btn to="/EditSong" variant="outlined">
          曲の編集画面
        </v-btn>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  //
</script>
