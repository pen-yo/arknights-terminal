<script setup lang="ts">
import { ref } from "vue";
import { Calc } from "@/utils/calc";
import { usePenguinIOStore } from "@/stores/penguin-io";

interface Moment {
  start: Date;
  end: Date;
  name: string;
}

const now = ref<Moment>();

usePenguinIOStore()
  .getNow()
  .then((data) => {
    const obj = data.reverse()[0];
    now.value = {
      start: new Date(obj.start),
      end: new Date(obj.end),
      name: obj.label_i18n.zh,
    };
  });

/**
 * 获取可读字符串。
 */
function toReadableStr(now: Date) {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  return `${year}年${month}月${day}日 ${hour}:${minute}`;
}
</script>

<template>
  <div class="leafroot">
    <p v-if="now">
      {{ now?.name }}（{{ toReadableStr(now.start) }} -
      {{ toReadableStr(now.end) }}）在国服举办中，结束前还可恢复{{
        Calc.getPhysical(now.end)
      }}点理智。
    </p>
  </div>
</template>

<style scoped>
p {
  color: var(--text-c);
}
</style>
