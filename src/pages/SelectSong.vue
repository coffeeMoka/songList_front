<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <div class="d-flex ali\gn-center justify-center fill-height">
        <v-btn variant="outlined" @click="rondomSelect">
          ランダム選曲
        </v-btn>
        <br>
        <p class="text-button" v-if="isClicked">
          {{ songName }}
        </p>
      </div>
    </v-responsive>
  </v-container>
</template>
<script setup lang="ts">
  import {ref} from "vue";
  import apiClient from "../plugins/apiClient"
  const songName = ref<string | null>(null);
  const isClicked = ref(false);
  interface Item {
    id: number
    name: string
    arribalflg: number
  }

  async function rondomSelect() {
    try {
      const response = await apiClient.get('/songs');
      console.log(response.data);
      if (!response.data) throw new Error('データの取得に失敗しました')

      const items = response.data as Item[];
      const randomNum = Math.floor(Math.random() * (items.length + 1));
      songName.value = items[randomNum].name;

    }
    finally {
      isClicked.value = true;
    }
  }
</script>
