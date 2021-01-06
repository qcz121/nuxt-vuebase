<style>
</style>

<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'default',
  middleware: 'checkLogin',
  created() {
  },
};
</script>
