<script setup lang="ts">
import Material from "@/components/Material.vue";
import { useRepositoryStore } from "@/stores/repo";
</script>
<template>
  <div class="leafroot">
    <material v-for="m in useRepositoryStore().getNames()" :name="m" />
  </div>
</template>

<style scoped></style>
