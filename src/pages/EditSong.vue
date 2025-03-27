<template>
  <v-container>
    <h2>データ一覧 (Vuetify)</h2>

    <!-- ロード中 -->
    <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>

    <!-- エラー発生時 -->
    <v-alert v-else-if="error" type="error">
      エラー: {{ error }}
    </v-alert>

    <!-- データ表示 -->
    <v-list v-else>
      <v-list-item v-for="item in items" :key="item.id">
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { VList, VListItem, VListItemTitle } from 'vuetify/components'
  import apiClient from "../plugins/apiClient.ts"

  // 型定義
  interface Item {
    id: number
    name: string
    arribalflg: number
  }

  const items = ref<Item[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await apiClient.get('/songs');
      console.log(response.data);
      if (!response.data) throw new Error('データの取得に失敗しました')
      
      items.value = response.data;
    } catch (err) {
      error.value = (err as Error).message
    } finally {
      loading.value = false
    }
  }
  onMounted(fetchData)
</script>