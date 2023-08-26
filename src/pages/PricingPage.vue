<template>
  <main-header-component></main-header-component>
  <main class="main__wrapper">
    <div class="first-block-wrapper">
      <page-first-block :page-title="pageTitle"></page-first-block>
    </div>

    <section class="pricing-card__wrapper container">
      <div class="pricing-card">

        <div class="card-title__wrapper">
          <p class="card-title">
            Design advices
          </p>
          <div class="card-price__wrapper">
            <div class="card-price-value">
              <span class="card-price__small">$</span>
              <p class="card-price">29</p>
            </div>
            <span class="card-price__small">/month</span>
          </div>
        </div>
        <div class="card-separator__wrapper">
          <span class="separator"></span>
        </div>
        <div class="card-description__wrapper">
          <ul class="description__list">
            <li>
              General living space advices
            </li>
            <li>
              Rennovation advices
            </li>
            <li>
              Interior design advices
            </li>
            <li>
              Furniture reorganization
            </li>
            <li>
              Up to 5 hours meetings
            </li>
          </ul>

        </div>
        <button class="main-button__color">
          Get Started
          <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                  stroke="#292F36"
                  stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>

      </div>

      <div class="pricing-card">

        <div class="card-title__wrapper">
          <p class="card-title">
            Complete interior
          </p>
          <div class="card-price__wrapper">
            <div class="card-price-value">
              <span class="card-price__small">$</span>
              <p class="card-price">39</p>
            </div>
            <span class="card-price__small">/month</span>
          </div>
        </div>
        <div class="card-separator__wrapper card-separator__popular">
          <p class="card-popular__text">
            Most Popular Plans
          </p>
          <span class="separator separator__popular"></span>
        </div>
        <div class="card-description__wrapper">
          <ul class="description__list">
            <li>
              Complete home redesign
            </li>
            <li>
              Interior and exterior works
            </li>
            <li>
              Modular interior planning
            </li>
            <li>
              Kitchen design
            </li>
            <li>
              Garages organization
            </li>
          </ul>

        </div>
        <button class="main-button">
          Get Started
          <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                  stroke="#CDA274"
                  stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>

      </div>

      <div class="pricing-card">

        <div class="card-title__wrapper">
          <p class="card-title">
            Furniture design
          </p>
          <div class="card-price__wrapper">
            <div class="card-price-value">
              <span class="card-price__small">$</span>
              <p class="card-price">59</p>
            </div>
            <span class="card-price__small">/month</span>
          </div>
        </div>
        <div class="card-separator__wrapper">
          <span class="separator"></span>
        </div>
        <div class="card-description__wrapper">
          <ul class="description__list">

            <li>
              Furniture for living room
            </li>
            <li>
              Furniture refurbishment
            </li>
            <li>
              Sofas and amchairs
            </li>
            <li>
              Tables and chairs
            </li>
            <li>
              Kitchens
            </li>
          </ul>

        </div>
        <button class="main-button__color">
          Get Started
          <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                  stroke="#292F36"
                  stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>

      </div>
    </section>
  </main>
  <main-footer-component></main-footer-component>
</template>

<script>


import MainHeaderComponent from "@/components/MainHeaderComponent.vue";
import MainFooterComponent from "@/components/MainFooterComponent.vue";
import PageFirstBlock from "@/components/PageFirstBlock.vue";

export default {
  name: "PricingPage",
  components: {PageFirstBlock, MainFooterComponent, MainHeaderComponent},
  data() {
    return {
      pageTitle: "Pricing & Plan",
      videoPreview: true
    }
  },
}
</script>

<style scoped>
.first-block-wrapper {
  background-image: url("../assets/pricing/main-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 8.136rem;
}

.pricing-card__wrapper {
  display: flex;
  margin: 6.82rem auto;
  gap: 2.18rem;
}

.pricing-card {
  padding: 2.91rem 0;

  border-radius: 1.5rem;
  background: #F4F0EC;

  transition: all .3s linear;
}

.pricing-card:hover {
  background: #F4F0EC;
  box-shadow: 0 0.455rem 0.909rem 0 rgba(136, 136, 136, 0.25);
}

.card-title {
  color: #292F36;
  text-align: center;
  font-family: 'DM Serif Display', serif;
  font-size: 1.13636rem;
  font-weight: 800;
  line-height: 150%; /* 1.70455rem */
  letter-spacing: 0.01136rem;
}

.card-price__wrapper {
  text-align: center;
}

.card-title__wrapper {
  padding: 0 4.16rem;
  margin-bottom: 1.68rem;
}

.card-price {
  color: #292F36;
  font-family: 'DM Serif Display', serif;
  font-size: 3.86364rem;
  line-height: 100%;
  font-weight: 900;
  letter-spacing: 0.03864rem;
}

.card-price__small {
  color: #292F36;
  text-align: center;
  font-family: 'DM Serif Display', serif;
  font-size: 1.13636rem;
  font-weight: 900;
  line-height: 150%; /* 1.70455rem */
  letter-spacing: 0.01136rem;
}

.card-price-value {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.separator {
  display: inline-block;
  width: 100%;
  height: 0.04545rem;
  background: #CDA274;
}

.card-description__wrapper {
  text-align: center;
  padding: 1.27rem 2.02rem;

  color: #4D5053;
  font-size: 0.90909rem;
  line-height: 250%; /* 2.27273rem */
  letter-spacing: 0.00909rem;
}

.main-button__color {
  transition: all .3s linear;
  margin: 0 auto;
}

.main-button {
  transition: all .3s linear;
  margin: 0 auto;
  font-size: 0.81818rem;
}

.card-separator__popular {
  position: relative;

  display: flex;
  justify-content: center;
}

.card-popular__text {
  color: #FFF;
  text-align: center;
  font-size: 0.81818rem;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.01636rem;

  border-radius: 0.81818rem;
  background: #292F36;
  padding: .45rem 1.73rem;

  display: inline-block;
  z-index: 3;
}

.separator__popular {
  position: absolute;
  top: 50%;
  z-index: 2;
  background-color: #292F36;
  left: 0;
}


@media (max-width: 1024px) {
  .pricing-card__wrapper {
    flex-direction: column;
  }
}

@media (max-width: 425px) {

}
</style>