<template>
  <div class="wrap">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

export default ({
  name: 'TestPage',
})
</script>

<style scoped>

</style>