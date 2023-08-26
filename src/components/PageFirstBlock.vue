<template>
  <div class="first-block__wrapper">
    <div class="first-block__content">
      <div class="page-title__wrapper">
        <h1>{{ pageTitle }}</h1>
      </div>
      <div class="page-breadcrumbs__wrapper">
        <router-link to="/" class="breadcrumbs__link breadcrumbs-home__link">Home</router-link>
        <span class="breadcrumbs-spacer">/</span>
        <p class="breadcrumbs__link breadcrumbs-current__link">{{ pageTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "PageFirstBlock",
  props: ["pageTitle"],
}
</script>

<style scoped>
.first-block__content {
  display: flex;

  border-radius: 1.68182rem 1.68182rem 0 0;
  background: #FFF;

  max-width: 22.86364rem;
  width: 100%;
  padding: 1.86364rem 3.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.45455rem;

  margin: 0 auto;
}

.page-breadcrumbs__wrapper {
  display: flex;
  align-items: center;
}

.breadcrumbs-spacer {
  margin: 0.2rem;
}

.breadcrumbs__link {
  color: #4D5053;
  letter-spacing: 0.01rem;
}

h1 {
  font-size: 2.27273rem;
}

@media (max-width: 747px) {
  .first-block__content {
    max-width: 15rem;
    width: 100%;
    padding: 1rem 2rem;
  }
  .page-title__wrapper h1 {
    font-size: 2rem;
  }
}

@media (max-width: 475px) {
  .first-block__content {
    max-width: 15rem;
    width: 100%;
    padding: 1rem 1.5rem;
  }

  .breadcrumbs__link {
    font-size: .7rem;
  }

  .page-title__wrapper h1 {
    font-size: 1.5rem;
  }

}
</style>