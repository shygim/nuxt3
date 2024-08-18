<template>
  <div>
    <div class="nav">
      <ul class="nav_list">
        <li v-for="item in navItems" :key="item.idx" class="nav_list_item">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Nav } from "../types/nav";

const navItems = ref<Nav[]>([
  { idx: 0, label: "시사0", value: "genral0" },
  { idx: 1, label: "시사1", value: "genral1" },
  { idx: 2, label: "시사2", value: "genral2" },
  { idx: 3, label: "시사3", value: "genral3" },
  { idx: 4, label: "시사4", value: "genral4" },
]);
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  margin-top: 88px;
  &_list {
    @include flex-center;
    list-style: none;
    width: 100%;
    gap: 24px;
    &_item {
      @include flex-center;

      padding: 6px 12px;
      background-color: $color-gray-100;
      border-radius: 20px;
      color: $color-black-700;
      cursor: pointer;
    }
  }
}
</style>
