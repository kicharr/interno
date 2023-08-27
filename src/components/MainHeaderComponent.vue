<template>
  <header class="header">
    <div class="header-wrapper container">

      <div class="header-content__left">
        <div class="header-logo__wrapper">
          <a href="/">
            <img class="header-logo__image" src="../assets/logo.svg" alt="Main logotype">
          </a>
        </div>
      </div>

      <div class="header-content__right">
        <nav class="header-link__wrapper">
          <ul class="header-link__list">
            <li>
              <router-link class="header-link" to="/about">About Us</router-link>
            </li>
            <li>
              <router-link class="header-link" to="/pricing">Pricing</router-link>
            </li>
            <li>
              <router-link class="header-link" to="/services/services-page">Services</router-link>
            </li>
            <li>
              <router-link class="header-link" to="/project">Project</router-link>
            </li>
            <li>
              <router-link class="header-link" to="/news">News</router-link>
            </li>
            <li>
              <router-link class="header-link" to="#">Contact</router-link>
            </li>
          </ul>
        </nav>

        <div class="mobile-menu__wrapper">
          <div class="header-link__burger">
            <a @click="showBurgerLinksList" class="header-link-burger__btn" href="#">
              <span id="burgerLink" class="burger-link__span"></span>
            </a>
            <ul id="burger" class="header-link-list__burger">
              <li>
                <router-link class=" header-link__burger" to="/about">About Us</router-link>
              </li>
              <li>
                <router-link class=" header-link__burger" to="/pricing">Pricing</router-link>
              </li>
              <li>
                <router-link class=" header-link__burger" to="/services/services-page">Services</router-link>
              </li>
              <li>
                <router-link class=" header-link__burger" to="/project">Project</router-link>
              </li>
              <li>
                <router-link class="header-link__burger" to="/news">News</router-link>
              </li>
              <li>
                <router-link class=" header-link__burger" to="#">Contact</router-link>
              </li>
            </ul>
          </div>

          <div class="header-search__wrapper">
            <button class="header-search">
              <img src="../assets/icons/header-search.svg">
            </button>
          </div>
        </div>

      </div>


    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeaderComponent',
  data() {
    return {
      // burgerLinksList: false
    }
  },
  methods: {
    showBurgerLinksList() {
      const burger = document.getElementById('burger');
      const burgerLink = document.getElementById('burgerLink');

      console.log(burger.className)
      if (burger.className == "header-link-list__burger") {
        burger.classList.add("burger-active")
        burgerLink.classList.add('burger-link-span__close');
      } else {
        burger.classList.remove("burger-active");
        burgerLink.classList.remove('burger-link-span__close');
      }
    }
  }
}

</script>

<style scoped>
.header {
  position: relative;
}

.header-link-list__burger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: beige;
  min-width: 100dvw;
  width: 100%;
  padding: 4rem 2rem 3rem;
  border-radius: 0 0 1rem 1rem;


  transition: all .3s linear;
  transform: translateY(-100%);
}

.burger-active {
  transform: translateY(0);
}

.header-link-list__burger li {
  margin-bottom: 1rem;
}

.mobile-menu__wrapper {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.625rem;
}

.header-wrapper {
  display: flex;
  align-items: center;

  padding: 2.15rem 0.625rem;
  position: relative;
}

.header-link__list {
  display: flex;
}

.header-link__list li {
  margin-right: 2.23rem;
}

.header-link__list li:last-child {
  margin-right: 0;
}

.header-content__right {
  display: flex;
  margin-left: auto;
}

.header-link__wrapper {
  display: flex;
  align-items: center;
  margin-right: 1.41rem;
}

.header-link {
  color: #292F36;
  text-align: center;
  font-size: 0.90909rem;
  font-weight: 400;
  line-height: 125%;

  transition: all .3s linear;
}

.header-link:hover {
  opacity: .6;
}

.header-search__wrapper {
  display: flex;
  align-items: center;
}

.header-search {
  display: inline-flex;
  align-items: center;
  transition: all .3s linear;
}

.header-search:hover {
  opacity: .6;
}

.header-link__burger {
  display: none;
}

.burger-link__span {
  display: inline-block;
  content: "";
  width: 1.875rem;
  height: 0.188rem;
  background-color: #CDA274;

  position: relative;
  border-radius: 0.227rem;


}

.burger-link__span:after {
  display: inline-block;
  content: "";
  width: 1.875rem;
  height: 0.188rem;
  background-color: #CDA274;

  position: absolute;
  top: -0.327rem;
  left: 0;
  border-radius: 0.227rem;
  transition: all .3s linear;
}

.burger-link__span:before {
  display: inline-block;
  content: "";
  width: 1.875rem;
  height: 0.188rem;
  background-color: #CDA274;

  position: absolute;
  top: 0.327rem;
  left: 0;
  border-radius: 0.227rem;
  transition: all .3s linear;
}


.burger-link-span__close {
  background: transparent;
}

.burger-link-span__close:after {
  top: 0;
  transform: rotate(45deg);
}

.burger-link-span__close:before {
  top: 0;
  transform: rotate(-45deg);
}

.header-link-burger__btn {
  display: flex;
  align-items: center;

  z-index: 5;
}

@media (max-width: 1052px) {
  .header-link__list {
    display: none;
  }

  .header-link__burger {
    display: flex;
  }
}

@media (max-width: 475px) {
  .header-logo__image {
    max-width: 6.818rem;
  }

  .header-wrapper {
    padding: 1.15rem 0.625rem;
  }
}

</style>