<script setup lang="ts">
import { ref } from "vue";
import router from "./router";
import FnIcon from "./components/FnIcon.vue";
import { useThemeStore } from "./stores/theme";

/** 功能 */
const fns = ref([
  { name: "首页" },
  { name: "掉率参考" },
  { name: "死线计算" },
  { name: "模拟罗德岛" },
]);

function handleChangingView(path: string) {
  router.push(encodeURI(path));
}

useThemeStore().applyTheme();
</script>

<template>
  <div class="view">
    <div class="sidebar">
      <fn-icon
        v-for="fn in fns"
        :name="fn.name"
        @click="handleChangingView(fn.name)"
      />
      <div class="barrier"></div>
      <fn-icon name="theme" @click="useThemeStore().changeTheme()" />
    </div>
    <div class="router">
      <router-view v-slot="{ Component }" :key="$route.fullPath">
        <keep-alive>
          <component class="router-content" :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--underlying-c);

  & > * {
    position: absolute;
    top: 0.5rem;
    height: calc(100% - 0.5rem * 2);
  }

  & .sidebar {
    display: flex;
    flex-direction: column;
    left: 0;
    width: 5rem;
    background: var(--background-c);
    border-radius: 0 1rem 1rem 0;

    & > * {
      text-align: center;
    }

    & .barrier {
      flex: 10;
    }
  }

  & .router {
    right: 0;
    width: calc(100% - 5rem - 0.5rem * 1.5);
    background: var(--background-c);
    border-radius: 1rem 0 0 1rem;
    overflow: auto;

    & .router-content {
      padding: 3rem 5rem;
    }
  }
}
</style>
