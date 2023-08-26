<template>
  <footer class="footer__wrapper">
    <div class="footer-content container">
      <div class="footer-social__wrapper">
        <a class="footer-logo__link" href="/">
          <img src="../assets/logo.svg" alt="Interno">
        </a>

        <p class="logo-description__text">
          It is a long established fact that a reader <br> will be distracted lookings.
        </p>

        <div class="footer-social-links__wrapper">
          <a class="footer-social__link" href="#">
            <img src="../assets/icons/footer-facebook.svg">
          </a>
          <a class="footer-social__link" href="#">
            <img src="../assets/icons/footer-twitter.svg">
          </a>
          <a class="footer-social__link" href="#">
            <img src="../assets/icons/footer-in.svg">
          </a>
          <a class="footer-social__link" href="#">
            <img src="../assets/icons/footer-instagram.svg">
          </a>
        </div>
      </div>


      <div class="nav-column__wrapper">
        <div class="nav-column ">
          <p class="nav-title">
            Pages
          </p>
          <ul class="nav-list">
            <li>
              <router-link to="/about" class="nav-link">About Us</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/pricing">Pricing</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/services/services-page">Services</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/project">Project</router-link>
            </li>
            <li>
              <router-link to="/services/services-page" class="nav-link">About Us</router-link>
            </li>

          </ul>
        </div>
        <div class="nav-column ">
          <p class="nav-title">
            Services
          </p>
          <ul class="nav-list">
            <li>
              <a href="#" class="nav-link">Kitchan</a>
            </li>
            <li>
              <router-link class="nav-link" to="/services/project-plan">Project plan</router-link>
            </li>
            <li>
              <a href="#" class="nav-link">Living Area
              </a>
            </li>
            <li>
              <a href="#" class="nav-link">Bathroom
              </a>
            </li>

            <li>
              <a href="#" class="nav-link">Dinning Hall
              </a>
            </li>

          </ul>
        </div>
      </div>

      <div class="footer-contacts__wrapper">
        <p class="nav-title">
          Contact
        </p>

        <p class="address">
          55 East Birchwood Ave. <br> Brooklyn, New York 11201
        </p>

        <a href="malito:contact@interno.com" class="contact-email">contact@interno.com</a>
        <a href="tel:(123) 456 - 7890" class="contact-phone">(123) 456 - 7890</a>
      </div>
    </div>

    <div class="footer-desc container">
      <span class="footer-desc__text">Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</span>
    </div>
  </footer>
</template>

<script>


export default ({
  name: "MainFooterComponent",
})
</script>

<style scoped>
.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.09rem;
}

.footer-logo__link {
  margin-bottom: 0.82rem;
}

.logo-description__text {
  margin-bottom: 1.41rem;
}

.footer-social-links__wrapper {
  display: flex;
  align-items: center;
}

.footer-social__link {
  margin-right: 2.85rem;
}

.footer-social__link:last-child {
  margin-right: 0;
}

.nav-title {
  color: #292F36;
  font-family: 'DM Serif Display', serif;
  font-size: 1.13636rem;
  font-weight: 900;
  line-height: 125%; /* 1.42045rem */
  margin-bottom: 0.41rem;
}

.nav-column__second {
  margin-left: 0;
}

.nav-column__wrapper {
  display: flex;
  gap: 4.59rem;
}

.nav-link {
  color: #4D5053;
  line-height: 300%;
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 0.82rem;
  letter-spacing: 0.01rem;
  transition: all .3s linear;
}

.nav-link:hover {
  opacity: .7;
}

.footer-contacts__wrapper {
  display: flex;
  flex-direction: column;
}

.address {
  color: #4D5053;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
  margin-bottom: 0.41rem;
}

.contact-email, .contact-phone {
  display: inline-block;
  color: #4D5053;
  line-height: 300%;
  letter-spacing: 0.01rem;
  transition: all .3s linear;
}

.contact-email:hover {
  opacity: .7;
}

.contact-phone:hover {
  opacity: .7;
}

.footer-desc {
  text-align: center;
  padding: 1.89rem 2.09rem;
}

.footer-desc__text {
  color: #4D5053;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
}

@media (max-width: 767px) {
  .footer-content {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .footer-social-links__wrapper {
    justify-content: center;
  }

  .nav-column__wrapper {
    display: flex;
    justify-content: center;
  }

  .footer-social-links__wrapper {
    margin: 2rem 0;
  }

  .nav-link[data-v-e4b82fae] {
    color: #4D5053;
    line-height: 140%;
    font-size: 0.7rem;
    margin-bottom: 0.82rem;
    letter-spacing: 0.01rem;
    transition: all .3s linear;
  }

  .footer-content {
    margin-bottom: 3rem;
  }

  .footer-desc__text {
    font-size: .9rem;
  }

}

@media (max-width: 475px) {
  .footer-content {
    margin: 0;
  }

  .logo-description__text {
    font-size: .8rem;
  }

  .footer-social-links__wrapper {
    margin: 1.5rem 0;
  }

  .nav-title {
    font-size: 1.5rem;
  }

  .address {
    font-size: .7rem;
  }

  .contact-email, .contact-phone {
    font-size: .7rem;
  }

  .nav-column__wrapper {
    margin-bottom: .5rem;
  }

  .footer-desc__text {
    font-size: .5rem;
  }

  .footer-desc {
    text-align: center;
    padding: 1rem 1.5rem;
  }
}
</style>