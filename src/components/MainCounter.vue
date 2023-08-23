<template>
  <div class="counter__wrapper">

    <div class="counter-content container">

      <div class="content-box__wrapper">
        <span class="counter-box__count">12</span>
        <p class="counter-box__description">
          Years Of Experiance
        </p>
      </div>

      <div class="counter-separator__wrapper">
        <span class="separator"></span>
      </div>

      <div class="content-box__wrapper">
        <span class="counter-box__count">85</span>
        <p class="counter-box__description">
          Success Project
        </p>
      </div>

      <div class="counter-separator__wrapper">
        <span class="separator"></span>
      </div>

      <div class="content-box__wrapper">
        <span class="counter-box__count">15</span>
        <p class="counter-box__description">
          Active Project
        </p>
      </div>

      <div class="counter-separator__wrapper">
        <span class="separator"></span>
      </div>

      <div class="content-box__wrapper">
        <span class="counter-box__count">95</span>
        <p class="counter-box__description">
          Happy CUstomers
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MainCounter"
}

</script>

<style scoped>
.counter__wrapper {
  background-color: #F4F0EC;
  padding: 6.86rem 0;
  margin: 9.09rem 0;
}

.counter-content {
  display: flex;
  align-items: center;
}

.content-box__wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.counter-box__count {
  color: #CDA274;
  font-family: "DM";
  font-size: 3.86364rem;
  line-height: 125%;
  letter-spacing: 0.07727rem;
  margin-bottom: 0.73rem;
}

.counter-box__description {
  color: #4D5053;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
}


.counter-separator__wrapper {
  margin: 0 3.45rem;
}

.separator {
  display: inline-block;
  content: "";
  width: 0.04545rem;
  height: 5.90909rem;
  background: #CDA274;
}


@media (max-width: 1057px) {
  .counter-content {
    flex-direction: column;
  }

  .counter-separator__wrapper {
    transform: rotate(90deg);
  }
}
</style>