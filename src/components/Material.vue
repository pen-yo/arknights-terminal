<script setup lang="ts">
import { type MaterialName, useMaterialStore } from "@/stores/material";

defineProps<{
  /** 名称 */
  name: MaterialName;
}>();
</script>

<template>
  <div class="material">
    <div
      class="icon"
      :style="`background-image: url(${useMaterialStore().getIcon(name)});`"
    ></div>
    <div class="name">{{ name }}</div>
    <ul class="levels">
      <li v-for="l in useMaterialStore().getLevelsData(name).slice(0, 3)">
        <div class="code">{{ l.code }}</div>
        <div class="cost">{{ l.cost }}c</div>
        <div class="efficiency">{{ l.efficiency }}c/件</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.material {
  --title-height: 4rem;

  display: inline-grid;
  grid-template-columns: 1fr 2fr;
  margin: 0 1.25rem 1.25rem 0;
  padding: 1rem 1rem 1.25rem;
  width: 12.5rem;
  background: linear-gradient(-125deg, var(--underlying-c), var(--component-c));
  border-radius: 1.25rem;
  box-shadow: 0 0 0.6rem var(--shadow-c);

  & .icon {
    width: var(--title-height);
    height: var(--title-height);
    background-size: contain;
  }

  & .name {
    color: var(--header-c);
    text-align: right;
    line-height: var(--title-height);
    font-weight: 500;
    font-size: 1.25rem;
  }

  & .levels {
    display: flex;
    flex-direction: column;
    grid-column: span 2;
    margin-top: 1rem;
    color: var(--text-c);

    & li {
      display: flex;
      list-style-type: none;

      &:hover {
        color: var(--hightlight-c);
        transition: none;
      }

      & .code {
        flex: 4;
      }

      & .cost {
        flex: 5;
      }

      & .efficiency {
        flex: 6;
        text-align: right;
      }
    }
  }
}
</style>
