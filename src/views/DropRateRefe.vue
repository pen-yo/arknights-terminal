<script setup lang="ts">
import Material from "@/components/Material.vue";
import { useMaterialStore } from "@/stores/material";
</script>
<template>
  <div class="leafroot">
    <material v-for="m in useMaterialStore().getNames()" :name="m" />
  </div>
</template>

<style scoped></style>
