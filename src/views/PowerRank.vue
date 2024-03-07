<script setup lang="ts">
import { Request } from "@/apis";
import { useHumanResourceStore } from "@/stores/hr";

function handleDrop(e: DragEvent) {
  (e.target as HTMLElement).appendChild(
    document.querySelector(`[title=${e.dataTransfer!.getData("op")}]`)!,
  );
}

function handleDragStart(e: DragEvent) {
  e.dataTransfer!.setData("op", (e.target as HTMLElement).title);
}
</script>

<template>
  <div class="leafroot">
    <div
      v-for="level in [
        'T0（人权必备/超大杯）',
        'T1（值得一养）',
        'T2（充数）',
        'T3（垃圾桶）',
      ]"
    >
      <h2>{{ level }}</h2>
      <div class="op-box" @dragover.prevent="" @drop.prevent="handleDrop"></div>
    </div>
    <div>
      <h2>未分类</h2>
      <div class="op-box last">
        <img
          v-for="op in useHumanResourceStore().ops"
          :src="Request.getImage('干员', op)"
          :title="op[0]"
          :draggable="true"
          @dragstart="handleDragStart"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.leafroot {
  color: var(--text-c);

  & .op-box {
    min-height: 80px;

    & img {
      width: 80px;
    }

    &.last {
      opacity: 0.6;
      filter: grayscale(0.8);
    }
  }
}
</style>
