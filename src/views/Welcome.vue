<script setup lang="ts">
import { ref } from "vue";
import { Calc, Format, Request } from "@/apis";
import type { InGameActivity } from "@/types/responses";

const now = ref<InGameActivity>();

Request.getNowActivity().then((data) => {
  now.value = data;
});
</script>

<template>
  <div class="leafroot">
    <span>
      <p>现在是{{ Format.toString() }} ，</p>
    </span>
    <span
      class="continue"
      v-if="now"
      v-for="passed in [Calc.isActuallyPassed(now)]"
    >
      <p>{{ now.name }}</p>
      <p>
        （{{ Format.toString(now.start) }} - {{ Format.toString(now.end) }}）
      </p>
      <p>{{ passed ? "在国服已结束。" : "在国服举办中，" }}</p>
      <p v-if="!passed">
        结束前还可恢复{{ Calc.getPhysical(now.end) }}点理智。
      </p>
    </span>
  </div>
</template>

<style scoped>
p {
  color: var(--text-c);
}

.continue > p {
  display: inline;
}
</style>
