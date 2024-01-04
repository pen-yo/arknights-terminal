<script setup lang="ts">
import { ref } from "vue";
import {
  mdiHomeFlood,
  mdiNotebook,
  mdiCalculatorVariant,
  mdiForum,
  mdiThemeLightDark,
} from "@mdi/js";

defineProps<{
  /** 名称 */
  name: string;
}>();

const mapper = ref(
  new Map([
    ["首页", mdiHomeFlood],
    ["掉率参考", mdiNotebook],
    ["死线计算", mdiCalculatorVariant],
    ["模拟罗德岛", mdiForum],
    ["theme", mdiThemeLightDark],
  ]),
);
</script>

<template>
  <div>
    <svg width="24" height="24" view-box="0 0 24 24">
      <path :d="mapper.get(name)" />
    </svg>
    <p v-if="name !== 'theme'">{{ name }}</p>
  </div>
</template>

<style scoped>
div {
  margin-top: 1.2rem;
  cursor: pointer;
  user-select: none;

  &:last-of-type {
    margin-bottom: 1.2rem;
  }

  & * {
    fill: var(--component-c);
    color: var(--component-c);
    transition: all 0.5s;
  }

  &:active * {
    fill: var(--hightlight-c);
    color: var(--hightlight-c);
    transition: none;
  }

  & svg {
    zoom: 1.66;
  }

  & p {
    font-size: 0.75rem;
    font-weight: bold;
  }
}
</style>
