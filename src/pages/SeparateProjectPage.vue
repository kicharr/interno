<template>
  <main-header-component></main-header-component>

  <main class="main__wrapper">
    <div class="first-block-wrapper">
      <!--      <page-first-block :page-title="pageTitle"></page-first-block>-->
    </div>


    <div class="main-content container">
      <div class="description-form">
        <div class="form-row">
          <p class="row-title">
            Client
          </p>
          <p class="row-text">
            Your client name
          </p>
        </div>
        <div class="form-row">
          <p class="row-title">
            Category
          </p>
          <p class="row-text">
            Interiors
          </p>
        </div>
        <div class="form-row">
          <p class="row-title">
            Tags
          </p>
          <p class="row-text">
            interior, Home
          </p>
        </div>
        <div class="form-row">
          <p class="row-title">
            Date
          </p>
          <p class="row-text">
            Date 23,02, 2022
          </p>
        </div>
        <div class="form-row">
          <p class="row-title">
            Link
          </p>
          <p class="row-text">
            Link example.com
          </p>
        </div>
      </div>

      <div class="description-text">
        <div class="description-text__title">
          <h1>
            Minimal Look Bedrooms
          </h1>
        </div>

        <p class="description-text__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
        </p>
        <p class="description-text__text">
          In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
        </p>
      </div>
    </div>
  </main>

  <main-footer-component></main-footer-component>
</template>

<script>

import MainHeaderComponent from "@/components/MainHeaderComponent.vue";
import MainFooterComponent from "@/components/MainFooterComponent.vue";
// import PageFirstBlock from "@/components/PageFirstBlock.vue";

export default {
  name: "SeparateProjectPage",
  components: {MainFooterComponent, MainHeaderComponent}
}
</script>

<style scoped>
.first-block-wrapper {
  background-image: url("../assets/separate-project/main-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 16.182rem;

  margin-bottom: 9.09rem;
}

.main-content {
  display: flex;
}

.form-row {
  display: flex;
  gap: 2.86rem;
}

.description-form {
  padding: 2.5rem 3.82rem;
  border-radius: 3.18182rem;
  background: #F4F0EC;
}

.row-title {
  color: #4D5053;
  font-family: 'DM Serif Display', serif;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
}

.row-text {
  color: #4D5053;
  font-weight: 400;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
}
</style>