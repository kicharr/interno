<template>
  <div class="contact-form__wrapper container">
    <p class="contact-form-title">
      Wanna join the interno?
    </p>
    <p class="contact-form-description">
      It is a long established fact will be distracted.
    </p>
    <button class="main-button__color">
      Contact With Us
      <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
              stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ContactFormFooter'
}

</script>

<style scoped>
.contact-form__wrapper {
  padding: 3.64rem 14.32rem;
  background-color: #292F36;
  border-radius: 3.18182rem;
  margin: 9.09rem auto;
}

.main-button__color {
  display: flex;
  align-items: center;
  flex-direction: row;

  transition: all .3s linear;
  margin: 0 auto;
}

.main-button__color:hover {
  opacity: .7;
}

path {
  stroke: #292F36;
}

.contact-form-title {
  color: #FFF;
  text-align: center;
  font-family: "DM", serif;
  font-size: 2.27273rem;
  line-height: 125%; /* 2.84091rem */

  margin-bottom: 0.5rem;
}

.contact-form-description {
  color: #FFF;
  text-align: center;
  line-height: 150%;
  letter-spacing: 0.01rem;

  margin-bottom: 1.5rem;
}

@media (max-width: 1052px) {
  .contact-form__wrapper {
    padding: 2.64rem 1rem;
    background-color: #292F36;
    border-radius: 2.18182rem;
    margin: 4.09rem auto;
  }

  .contact-form-title {
    font-size: 2.27273rem;
  }

  .contact-form-description {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 767px) {
  .contact-form-title {
    font-size: 2rem;
  }

  .contact-form__wrapper {
    padding: 2rem 1rem;
    background-color: #292F36;
    border-radius: 2.18182rem;
    margin: 4.09rem auto;
  }

  .main-button__color {
    padding: 1rem;
  }
}
</style>