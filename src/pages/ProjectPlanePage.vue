<template>
  <main-header-component></main-header-component>

  <main class="main__wrapper">
    <div class="first-block-wrapper">
      <page-first-block :page-title="pageTitle"></page-first-block>
    </div>
    <div class="main-content__wrapper">


      <section class="page-description__wrapper container">
        <div class="page-content__column">
          <div class="page-title__wrapper">
            <h1>We set the trends of
              modern living
              Services.</h1>
          </div>
        </div>
        <div class="page-content__column content__text">
          <p class="page-text__description page-text__colored">
            It is a long established fact that a reader will be distracted by the of readable content of a page
          </p>
          <p class="page-text__description">
            when lookings at its layouts the points spriof using that it has a more
            less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of
            sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot,
            which was created for the bliss of souls like mine.
          </p>

          <p class="page-text__description">
            when lookings at its layouts the points spriof using that it has a more
            less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of
            sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot,
            which was created for the bliss of souls like mine.
          </p>
        </div>
      </section>

      <section class="client-logo__wrapper container">
        <ul class="client-logo__list">
          <li>
            <a href="#">
              <img src="../assets/home-page/client-logo01.svg" alt="Client logo №1">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/home-page/client-logo02.svg" alt="Client logo №2">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/home-page/client-logo03.svg" alt="Client logo №3">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/home-page/client-logo04.svg" alt="Client logo №4">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/home-page/client-logo05.svg" alt="Client logo №5">
            </a>
          </li>
        </ul>
      </section>

      <section class="video-preview__wrapper container">

        <div class="main-video__wrapper">
          <iframe width="100%" height="374" src="https://www.youtube.com/embed/dDjo3ZhQEPI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>


          <div v-if="videoPreview" class="main-video__preview">
            <img src="../assets/project-plan/video-preview.png">


            <div @click="playVideo" class="main-video-play__wrapper">
              <svg width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_2163)">
                  <circle cx="86" cy="76" r="66" fill="white"/>
                  <path
                      d="M82.941 91.4289L99.1666 77.7781C99.428 77.558 99.6378 77.2851 99.7817 76.9779C99.9255 76.6708 100 76.3368 100 75.9987C100 75.6607 99.9255 75.3266 99.7817 75.0195C99.6378 74.7123 99.428 74.4394 99.1666 74.2194L82.941 60.5686C81.3923 59.2658 79 60.3459 79 62.3479V89.6534C79 91.6554 81.3923 92.7355 82.941 91.4289Z"
                      fill="#CDA274"/>
                </g>
                <defs>
                  <filter id="filter0_d_1_2163" x="0" y="0" width="172" height="172" filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="10"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix"
                                   values="0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2163"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2163" result="shape"/>
                  </filter>
                </defs>
              </svg>

            </div>
          </div>
        </div>

      </section>


      <section class="lists__wrapper container">
        <div class="separate-list__wrapper">
          <p class="facts-list__title">
            Use of Interior
          </p>
          <ol class="facts-list">
            <li>
              We provide high quality design services.
            </li>
            <li>
              Project on time and Latest Design.
            </li>
            <li>
              Scientific Skills For getting a better result.
            </li>
            <li>
              Renovations Benefit of Service
            </li>
            <li>
              We are confident about our projects.
            </li>
          </ol>
        </div>

        <div class="list-separator__wrapper">
          <span class="list-separator">

          </span>
        </div>

        <div class="separate-list__wrapper">
          <p class="facts-list__title">
            Make An Art
          </p>
          <ol class="facts-list">
            <li>
              We provide high quality design services.
            </li>
            <li>
              Project on time and Latest Design.
            </li>
            <li>
              Scientific Skills For getting a better result.
            </li>
            <li>
              Renovations Benefit of Service
            </li>
            <li>
              We are confident about our projects.
            </li>
          </ol>
        </div>

      </section>

      <section class="services__wrapper container">

        <div class="services-content__wrapper">

          <div class="services-card">
            <div class="services-card__img">
              <img src="../assets/project-plan/card-image.png" alt="What we can do image">
            </div>

            <div class="services-card__content">
              <p class="services-card__title">
                We love design.That's how we got here.
              </p>
              <p class="services-card__description">
                It is a long established fact that a reader will be distracted by the of readable content .
              </p>

              <button class="main-button">
                <a href="#">
                  Our Portfolio
                  <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                          stroke="#CDA274"
                          stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                  </svg>
                </a>
              </button>
            </div>


          </div>

        </div>
      </section>


      <main-counter></main-counter>
    </div>
  </main>

  <main-footer-component></main-footer-component>
</template>

<script>

import MainHeaderComponent from "@/components/MainHeaderComponent.vue";
import MainFooterComponent from "@/components/MainFooterComponent.vue";
import PageFirstBlock from "@/components/PageFirstBlock.vue";
import MainCounter from "@/components/MainCounter.vue";

export default {
  name: "ProjectPlanPage",
  components: {MainCounter, PageFirstBlock, MainFooterComponent, MainHeaderComponent},
  data() {
    return {
      pageTitle: "Project Plan",
      videoPreview: true
    }
  },
  methods: {
    playVideo() {
      this.videoPreview = false
    }
  }
}
</script>

<style scoped>
.first-block-wrapper {
  background-image: url("../assets/project-plan/main-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 8.136rem;
}


.page-description__wrapper {
  display: flex;
  margin: 9.09rem auto 6.82rem;
}

.page-title__wrapper {
  margin-right: 4.41rem;
}

.page-text__description {
  color: #4D5053;
  line-height: 150%;
  letter-spacing: 0.01rem;
  margin-bottom: 1.27rem;
}

.page-text__colored {
  color: #CDA274;
  font-size: 1.13636rem;
  line-height: 150%; /* 1.70455rem */
  letter-spacing: 0.01136rem;
}

.page-content__column {
  flex-basis: 42%;
}

.content__text {
  flex-basis: 58%;
}

.page-title__wrapper h1 {
  color: #292F36;
  font-size: 2.27273rem;
  line-height: 125%;
}

/* SECTION CLIENT */

.client-logo__wrapper {
  margin: 6.82rem auto 6.85rem;
}

.client-logo__list {
  display: flex;
  align-items: center;
  gap: 4.91rem;
}

.client-logo__list li {
  transition: all .3s linear;
}

.client-logo__list li:hover {
  transform: scale(1.2);
}

/* SECTION VIDEO */
.video-preview__wrapper {
  margin-bottom: 6.82rem;
}

.main-video__wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 3.18rem;
}

.main-video__wrapper iframe {
  border-radius: 3.18rem;
}

.main-video__preview {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.main-video-play__wrapper {
  position: absolute;
  top: calc(50% - 3.909rem);
  left: calc(50% - 3.909rem);
  z-index: 4;

  cursor: pointer;
}

.main-video-play__wrapper:hover svg {
  opacity: .7;
}

.lists__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.facts-list__title {
  color: #292F36;
  font-family: 'DM Serif Display', serif;
  font-size: 2.27273rem;
  line-height: 125%;
  font-weight: 900;
  letter-spacing: 0.04545rem;

  margin-bottom: 1.05rem;
}

.facts-list {
  padding-left: .8rem;
}

.facts-list, .facts-list li {
  list-style: decimal;
}

.facts-list li {
  color: #4D5053;
  font-weight: 400;
  line-height: 270%; /* 2.7rem */
  letter-spacing: 0.01rem;
}

.facts-list li::marker {
  color: #CDA274;
  font-family: 'DM Serif Display', serif;
  font-size: 0.90909rem;
  line-height: 125%; /* 1.13636rem */
  letter-spacing: 0.01818rem;
}

.list-separator__wrapper {
  margin: 0 3.77rem;
}

.list-separator {
  display: block;
  width: 0.04545rem;
  height: 11.31818rem;
  background: #CECECE;
}


.services__wrapper {
  margin: 6.02rem auto 9.09rem;
}

.services-content__wrapper {
  display: flex;
}

.services-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.73rem;
}

.services-card__content {
  flex-basis: 50%;
  margin-right: 1.64rem;
}

.services-card__img {
  display: inline-flex;
}

.services-card__title {
  color: #292F36;
  font-size: 2.27273rem;
  font-family: 'DM Serif Display', serif;
  font-weight: 900;
  line-height: 125%; /* 2.84091rem */
  letter-spacing: 0.04545rem;

  margin-bottom: .5rem;
}

.services-card__description {
  color: #4D5053;
  line-height: 150%;
  letter-spacing: 0.01rem;

  margin-bottom: 1.45rem;
}

.services-card__img img {
  max-width: 29.95455rem;
  width: 100%;

  transition: all .3s linear;
}

.services-card__img img:hover {
  transform: scale(1.1);
}

.main-button {
  transition: all .3s linear;
}

.main-button:hover {
  background-color: #CDA274;
}

.main-button:hover path {
  stroke: #292F36;
}

.main-button a {
  display: flex;
  align-items: center;
  gap: 0.64rem;
}

@media (max-width: 1114px) {
  .client-logo__list {
    flex-wrap: wrap;
  }

  .main-video-play__wrapper {
    left: calc(50% - 9.909rem);
  }
}



@media (max-width: 425px) {
  .page-description__wrapper {
    flex-direction: column;
  }

  .page-content__column, .content__text {
    flex-basis: 100%;
  }

  .client-logo__list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .main-video__wrapper {
    border-radius: 5.18rem;
  }

  .main-video-play__wrapper {
    left: calc(50% - 26.909rem);
  }

  .lists__wrapper {
    flex-direction: column;
  }

  .list-separator__wrapper {
    margin: -3rem 0;
  }

  .services-card {
    flex-direction: column;
  }

  .list-separator {
    transform: rotate(90deg);
  }
  .page-description__wrapper {
    margin: 3rem auto 2rem;
  }

  .page-title__wrapper {
    margin-right: 0;
    margin-bottom: .3rem;
  }

  .page-title__wrapper h1 {
    color: #292F36;
    font-size: 1.5rem;
    line-height: 125%;
  }

  .page-text__description {
    font-size: 0.7rem;
  }

  .page-text__description:last-child {
    margin: 0;
  }

  .client-logo__wrapper {
    margin: 2rem auto;
  }

  .client-logo__list a img {
    max-width: 4rem;
    width: 100%;
  }

  .client-logo__list {
    gap: 2rem;
  }

  .video-preview__wrapper {
    margin-bottom: 2rem;
  }

  .main-video-play__wrapper svg {
    max-width: 5rem;
    width: 100%;
  }

  .main-video-play__wrapper {
    left: calc(50% - 25rem);
  }

  .facts-list__title {
    font-size: 1.8rem;
  }

  .facts-list li {
    line-height: 150%;
    font-size: .8rem;
  }


  .services__wrapper {
    margin: 2rem auto 3rem;
  }

  .services-card {
    gap: 2rem;
  }

  .services-card__title {
    font-size: 1.4rem;
  }

  .services-card__description {
    font-size: .8rem;
    margin-bottom: 1.45rem;
  }

  .main-button {
    padding: .8rem .9rem;
    font-size: 0.61818rem;
  }
}

@media (max-width: 320px) {
  .main-video-play__wrapper {
    left: calc(50% - 27rem);
  }
}


</style>