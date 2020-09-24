<template>
  <div class="section-divider">
    {{ data }}
  </div>
</template>

<script>
  export default {
    name: "section-divider",
    props: {
      data: {
        type: String,
        required: true
      }
    },
  }
</script>

<style>
.section-divider {
  margin: 10px 0 0 10px;
  font-weight: 500;
  color: #3e3d3d;
}
</style>