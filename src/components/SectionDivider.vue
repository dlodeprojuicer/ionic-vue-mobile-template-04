<template>
  <div class="section-divider">
    {{ data }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: string;
}>();
</script>

<style>
.section-divider {
  margin: 10px 0 0 10px;
  font-weight: 500;
  color: #3e3d3d;
}
</style>
