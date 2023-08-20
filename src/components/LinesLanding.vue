<template>
  <div class="lines-wrapper container">
    <span class="line first-line"></span>
    <span class="line second-line"></span>
  </div>
</template>

<script>

export default {
  name: "LinesLanding"
}

</script>

<style scoped>
body {
  position: relative;
}

.lines-wrapper {
  display: none;
}

.line {
  position: absolute;
  top: 0;
  left: 0;

  display: inline-block;
  content: " ";
  width: 0.04545rem;
  height: 366.54545rem;
  //background-color: #000000;
  background-color: #E6E6E6;
  z-index: -2;
}

.first-line {
  left: 41dvw;
}

.second-line {
  left: 59.4dvw;
}

</style>