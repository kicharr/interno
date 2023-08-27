<template>
  <main-header-component></main-header-component>

  <main class="main__wrapper">
    <div class="first-block-wrapper">
      <!--      <page-first-block :page-title="pageTitle"></page-first-block>-->
    </div>


    <div class="main-content ">
      <section class="first-block container">
        <div class="description-text">
          <div class="description-text__title">
            <h1>
              Minimal Look Bedrooms
            </h1>
          </div>

          <p class="description-text__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam
            sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi
            fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
          </p>
          <p class="description-text__text">
            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis
            quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis
            convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
            purus porttitor.
          </p>
        </div>
      </section>


      <section class="photo-zoom__wrapper">
        <div class="photo-zoom-image__wrapper container">
          <img id="imagePreview" :src="previewProjectLink" class="image-preview " alt="Main image zoom">

          <div id="controller" class="photo-zoom__controller">
            <img @click="showImage" src="../assets/separate-project/zoom-Icon.svg">
          </div>


        </div>
      </section>
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
  components: {MainFooterComponent, MainHeaderComponent},
  data() {
    return {
      previewProjectLink: require("../assets/separate-project/iamge-zoom.png")
    }
  },
  methods: {
    showImage() {
      const currentImage = document.getElementById('imagePreview');
      const controller = document.getElementById('controller');

      if (currentImage.classList == 'image-preview') {
        currentImage.classList.add('image-preview__show');

        controller.classList.add('photo-zoom-controller__active');

      } else {
        currentImage.classList.remove('image-preview__show')
        controller.classList.remove('photo-zoom-controller__active');
      }
    }
  }
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
//display: flex;
}

.form-text li {
  margin-bottom: 0.91rem;
}

.form-title li {
  margin-bottom: .91rem;
}

.form-title {
  color: #4D5053;
  font-family: 'DM Serif Display', serif;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
}

.description-text__title {
  margin-bottom: .5rem;
}

.description-text__title h1 {
  color: #292F36;
  font-family: 'DM Serif Display', serif;
  font-size: 2.27273rem;
  line-height: 125%; /* 2.84091rem */
  letter-spacing: 0.04545rem;
}

.description-text__text {
  color: #4D5053;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
  margin-bottom: 1rem;
}

.first-block {
  display: flex;
  margin-bottom: 4.55rem;
}

.photo-zoom-image__wrapper {
  position: relative;
  margin-bottom: 9.09rem;

}

.photo-zoom__controller {
  position: absolute;
  top: calc(50% - 86px);
  left: calc(50% - 86px);

  cursor: pointer;
  transition: all .3s linear;
}

.photo-zoom-controller__active {
  top: 1rem;
  left: 1rem;

  overflow: hidden;
}

.photo-zoom-controller__active img {
  max-width: 3rem;
  width: 100%;
}

.photo-zoom__controller:active {
  opacity: .5;
}

.image-preview {
  filter: blur(10px);
}

.image-preview__show {
  filter: blur(0px);
}

@media (max-width: 1024px) {
  .first-block {
    display: flex;
    flex-direction: column;
  }

  .image-preview {
    //max-width: 10vw;
    width: 100%;
  }
}

@media (max-width: 425px) {
  .first-block-wrapper {
    height: 10rem;
    margin-bottom: 3.09rem;
  }

  .first-block-wrapper {

  }

  .description-text__title h1 {
    font-size: 1.5rem;
  }

  .description-text__text {
    font-size: .8rem;
  }

  .first-block {
    margin-bottom: 3rem;
  }

  .photo-zoom__controller img {
    max-width: 5rem;
    width: 100%;
  }

  .photo-zoom__controller {
    top: calc(50% - 45px);
    left: calc(50% - 45px);
  }

  .photo-zoom-controller__active {
    top: 1rem;
    left: 1rem;

    overflow: hidden;
  }

  .photo-zoom-controller__active img {
    max-width: 2rem;
    width: 100%;
  }
}

</style>

