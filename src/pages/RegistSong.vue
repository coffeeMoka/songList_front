<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field v-model="songName" :readonly="loading" :rules="[required]" class="mb-2" label="Song"
          clearable></v-text-field>
        <v-btn :disabled="!form" :loading="loading" color="success" size="large" type="submit" variant="elevated" block>
          登録
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import apiClient from '../plugins/apiClient.ts';

type SongModel = {
  id: number|null,
  name: string|null,
  arribalflg: number
}

const form = ref(false)
const songName = ref(null)
const loading = ref(false)

async function onSubmit() {
  if (!form.value) return
  loading.value = true
  const sendModel : SongModel = {name: songName.value, arribalflg: 0};
  await apiClient.post("/songs", sendModel);
  
  setTimeout(() => (loading.value = false), 2000)
}
function required(v) {
  return !!v || 'Field is required'
}
</script>