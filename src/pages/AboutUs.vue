<template>
  <main-header-component></main-header-component>

  <main class="main__wrapper">
    <div class="first-block-wrapper">
      <page-first-block :page-title="pageTitle"></page-first-block>
    </div>

    <div class="main-content ">
      <section class="citation__wrapper container">
        <div class="citation-content">
          <div class="quote__wrapper">
            <p class="quote">“</p>
          </div>

          <div class="citation-text__wrapper">
            <p class="citation__text">
              I like an interior that defies labeling. I don't really want someone to walk into a room and know that I
              did it
            </p>
          </div>

          <div class="citation-author__wrapper">
            <p class="citation__author">
              -BUNNY WILLIAMS
            </p>
          </div>
        </div>
      </section>

      <section class="services__wrapper container">

        <div class="services-content__wrapper">

          <div class="services-card">

            <div class="services-card__content">
              <p class="services-card__title">
                What We Do
              </p>
              <p class="services-card__description">
                It is a long established fact that a reader will be distracted by the of readable content of a page
                when lookings at its layouts the points of using
                that it has a more-or-less normal.
              </p>

              <button class="main-button">
                <a href="#">
                  Our Concept
                  <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                          stroke="#CDA274"
                          stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                  </svg>
                </a>
              </button>
            </div>

            <div class="services-card__img">
              <img src="../assets/about-us/we-do.png" alt="What we can do image">
            </div>
          </div>

          <div class="services-card services-card__reverse">

            <div class="services-card__content services-content-wrapper__reverse ">
              <p class="services-card__title">
                The End Result
              </p>
              <p class="services-card__description">
                It is a long established fact that a reader will be distracted by the of readable content of a page
                when lookings at its layouts the points of using
                that it has a more-or-less normal.
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

            <div class="services-card__img">
              <img src="../assets/about-us/result.png" alt="What we can do image">
            </div>
          </div>


        </div>

      </section>


      <section class="people-list__wrapper">

        <div class="people-list__content container">
          <div class="people-list-title__wrapper ">
            <h2>What the People Thinks <br> About Us</h2>
          </div>


          <div class="people-cards__wrapper">
            <div class="people-card">
              <div class="people-preview">
                <img src="../assets/about-us/people-list-1.png" class="people-preview__img" alt="Human">
              </div>

              <div class="people-description">
                <div class="info-wrap">
                  <p class="people-description__name">
                    Nattasha Julie
                  </p>
                  <p class="people-description__text">
                    Design, Australia
                  </p>
                </div>


                <div class="social-links__wrapper">
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-facebook.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-twitter.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-in.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-instagram.svg">
                  </a>
                </div>


                <div class="links-wrap">
                  <a href="malito:julie@email.com" class="contact-email">julie@email.com</a>
                  <a href="tel+1 (378) 400-1234" class="contact-phone">+1 (378) 400-1234</a>
                </div>

              </div>
            </div>


            <div class="people-card">
              <div class="people-preview">
                <img src="../assets/about-us/people-list-2.png" class="people-preview__img" alt="Human">
              </div>

              <div class="people-description">
                <div class="info-wrap">
                  <p class="people-description__name">
                    Nattasha Julie
                  </p>
                  <p class="people-description__text">
                    Design, Australia
                  </p>
                </div>


                <div class="social-links__wrapper">
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-facebook.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-twitter.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-in.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-instagram.svg">
                  </a>
                </div>


                <div class="links-wrap">
                  <a href="malito:julie@email.com" class="contact-email">julie@email.com</a>
                  <a href="tel+1 (378) 400-1234" class="contact-phone">+1 (378) 400-1234</a>
                </div>

              </div>
            </div>


            <div class="people-card">
              <div class="people-preview">
                <img src="../assets/about-us/people-list-1.png" class="people-preview__img" alt="Human">
              </div>

              <div class="people-description">
                <div class="info-wrap">
                  <p class="people-description__name">
                    Nattasha Julie
                  </p>
                  <p class="people-description__text">
                    Design, Australia
                  </p>
                </div>


                <div class="social-links__wrapper">
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-facebook.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-twitter.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-in.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-instagram.svg">
                  </a>
                </div>


                <div class="links-wrap">
                  <a href="malito:julie@email.com" class="contact-email">julie@email.com</a>
                  <a href="tel+1 (378) 400-1234" class="contact-phone">+1 (378) 400-1234</a>
                </div>

              </div>
            </div>

            <div class="people-card">
              <div class="people-preview">
                <img src="../assets/about-us/people-list-3.png" class="people-preview__img" alt="Human">
              </div>

              <div class="people-description">
                <div class="info-wrap">
                  <p class="people-description__name">
                    Nattasha Julie
                  </p>
                  <p class="people-description__text">
                    Design, Australia
                  </p>
                </div>


                <div class="social-links__wrapper">
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-facebook.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-twitter.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-in.svg">
                  </a>
                  <a class="social__link" href="#">
                    <img src="../assets/icons/footer-instagram.svg">
                  </a>
                </div>


                <div class="links-wrap">
                  <a href="malito:julie@email.com" class="contact-email">julie@email.com</a>
                  <a href="tel+1 (378) 400-1234" class="contact-phone">+1 (378) 400-1234</a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>


      <section class="creative-form container">
        <p class="title-center">
          Creative project? Let's have <br>
          a productive talk.
        </p>


        <div class="creative-form__int">
          <div class="inputs-wrapper">
            <input type="text" placeholder="Name" class="input input__name">

            <input type="text" placeholder="Email" class="input input__email">
          </div>

          <textarea class="input input__message" placeholder="Hello Iam Intrested in.." maxlength="500"
                    rows="4"></textarea>
        </div>

        <button class="main-button main-button__form">
          Send Now
          <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
                  stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </button>


      </section>
    </div>

  </main>

  <main-footer-component></main-footer-component>
</template>


<script>
import MainHeaderComponent from "@/components/MainHeaderComponent.vue";
import MainFooterComponent from "@/components/MainFooterComponent.vue";
import PageFirstBlock from "@/components/PageFirstBlock.vue";

export default {
  name: "AboutUs",
  components: {PageFirstBlock, MainHeaderComponent, MainFooterComponent},
  data() {
    return {
      pageTitle: 'Abouts Us',
    }
  }
}


</script>

<style scoped>
.first-block-wrapper {
  background-image: url("../assets/about-us/main-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 8.136rem;
}

.citation__wrapper {
  margin: 11.91rem auto 9.26rem;

  text-align: center;
  color: #292F36;
  font-weight: 900;
  font-style: italic;
  font-family: 'DM Serif Display', serif;
  line-height: 163%;

  max-width: 34.13636rem;
  width: 100%;
}

.citation-content {
  position: relative;
}

.citation-content:after {
  position: absolute;
  top: calc(50% - 10rem);
  left: -2.82rem;
  content: url("../assets/about-us/pattern-left.svg");
}

.citation-content:before {
  position: absolute;
  top: calc(50% - 10rem);
  right: -2.82rem;
  content: url("../assets/about-us/pattern-right.svg");
}

.quote__wrapper {
  margin-bottom: 1.23rem;
}

.quote {
  font-size: 3.86364rem;
  letter-spacing: 0.07727rem;
}

.citation__text {
  font-size: 1.59091rem;
  letter-spacing: 0.03182rem;
}

.citation-text__wrapper {
  margin-bottom: 1.55rem;
}

.citation__author {
  color: #4D5053;
  text-align: center;
  font-family: "Jost", sans-serif;
  font-size: 1.13636rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.70455rem */
  letter-spacing: 0.01136rem;
}

.services-content__wrapper {
  display: flex;
  flex-direction: column;
  gap: 6.82rem;

  margin-bottom: 7.86rem;
}

.services-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.services-card__content {
  flex-basis: 40%;
  margin-right: 1.64rem;
}

.services-card__img {
  display: inline-flex;
}

.services-card__title {
  color: #292F36;
  font-size: 2.27273rem;
  font-family: 'DM Serif Display', serif;
  font-style: normal;
  font-weight: 900;
  line-height: 125%; /* 2.84091rem */
  letter-spacing: 0.04545rem;

  margin-bottom: 1.05rem;
}

.services-card__description {
  color: #4D5053;
  line-height: 150%;
  letter-spacing: 0.01rem;

  margin-bottom: 1.86rem;
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

.services-card__reverse {
  flex-direction: row-reverse;
}

.services-content-wrapper__reverse {
  margin-right: 0;
  margin-left: 1.64rem;
}

.people-list__wrapper {
  background-color: #F4F0EC;
  padding: 8.41rem 0 8.36rem;
  margin-bottom: 9.68rem;
}

.people-list-title__wrapper h2 {
  color: #292F36;
  text-align: center;
  font-size: 2.27273rem;

  line-height: 125%; /* 2.84091rem */
  letter-spacing: 0.04545rem;

  margin-bottom: 1.28rem;
}

.people-cards__wrapper {
  display: flex;
  gap: 1rem;
}

.people-card {
  position: relative;

  max-width: 12.88855rem;
  width: 100%;

  overflow: hidden;
}

.people-description {

  opacity: 0;
  visibility: hidden;
  border-radius: 1.364rem;
  transition: all .3s linear;
//transform: translateY(100%); position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  padding: 3.1rem 1.25rem 3.3rem;

  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: center;
}


.people-preview {
  overflow: hidden;
  border-radius: 1.364rem;
}

.people-card:hover .people-description {
//transform: translateY(0); opacity: 1;
  visibility: visible;
}

.people-preview img {
  border-radius: 1.364rem;
}

.social-links__wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.social-links__wrapper img {
  display: flex;
}

.links-wrap {
  display: flex;
  flex-direction: column;
}

.contact-email, .contact-phone {
  display: inline-block;
  color: #4D5053;
  text-align: center;
  font-size: 0.81818rem;
  line-height: 150%; /* 1.22727rem */
  letter-spacing: 0.00818rem;
  transition: all .3s linear;
}

.contact-email:hover {
  opacity: .7;
}

.contact-phone:hover {
  opacity: .7;
}

.people-description__name {
  color: #292F36;
  text-align: center;
  font-family: 'DM Serif Display', serif;
  font-weight: 900;
  font-size: 1.13636rem;
  line-height: 150%;
  letter-spacing: 0.01136rem;
}

.people-description__text {
  color: #4D5053;
  font-size: 0.81818rem;
  line-height: 150%;
  letter-spacing: 0.00818rem;
}

.social__link {
  transition: all .3s linear;
}

.social__link:hover {
  transform: scale(1.2);
}

.creative-form {
  margin-bottom: 6.14rem;
}

.title-center {
  color: #292F36;
  text-align: center;
  font-family: 'DM Serif Display', serif;
  font-size: 2.27273rem;
  font-weight: 900;
  line-height: 125%;
  letter-spacing: 0.04545rem;
  margin-bottom: 3.5rem;
}

.inputs-wrapper {
  display: flex;
  gap: 1.82rem;
  margin-bottom: 2.59rem;
}

.input {
  display: inline-block;
  width: 100%;

  background-color: transparent;
  border: none;
  border-bottom: 0.04545rem solid #000000;

  color: #4D5053;
  font-size: 1rem;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
}


.input:focus-visible {
  outline: none;
}

.input__name, .input__email {
  padding-bottom: 0.59rem;
}

.input__message {
  resize: none;
}

.creative-form__int {
  margin-bottom: 3.5rem;
}

.main-button {
  margin: 0 auto;
}


@media (max-width: 1024px) {
  .citation-content:after {
    display: none;
  }

  .citation-content:before {
    display: none;
  }

  .services-card {
    flex-direction: column-reverse;
  }

  .services-content__wrapper {
    gap: 3rem;
  }

  .services-card__content {
    margin: 0;
  }

  .services-content-wrapper__reverse {
    margin: 0;
  }

  .services-card__img {
    margin-bottom: 0.3rem;
  }

  .main-button__form {
    margin: 0 auto;
  }

  .people-cards__wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 475px) {
  .people-card {
    max-width: 10rem;
    width: 100%;
  }
  .title-center {
    font-size: 1.5rem;
  }
  .inputs-wrapper {
    flex-direction: column;
  }

  .people-preview__img img {
    max-height: 3rem;
    height:  100%;
  }

  .citation__wrapper  {
    margin: 5.91rem auto 3.26rem;
  }
}
</style>