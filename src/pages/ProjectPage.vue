<template>
  <main-header-component></main-header-component>

  <main class="main__wrapper">
    <div class="first-block-wrapper">
      <page-first-block :page-title="pageTitle"></page-first-block>
    </div>


    <div class="page-control__wrapper container">
      <button @click="checkProjectWrapper" class="controller-button active">Bathroom</button>
      <button @click="checkProjectWrapper" class="controller-button">Bed Room</button>
      <button @click="checkProjectWrapper" class="controller-button">Kitchan</button>
      <button @click="checkProjectWrapper" class="controller-button">Living Area</button>
    </div>

    <div v-if="contentWrappers.bathroomWrapper" class="bathroom__wrapper container">

      <div class="project-card-column project-card-column__left">
        <div class="project-card project-card__big">
          <div class="project-card__preview">
            <img src="../assets/projects/project-1.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <router-link to="/separate-project-page">
                <img src="../assets/home-page/news-link.svg">
              </router-link>
            </div>
          </div>
        </div>
        <div class="project-card project-card__small">
          <div class="project-card__preview">
            <img src="../assets/projects/project-2.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
        <div class="project-card project-card__big">
          <div class="project-card__preview">
            <img src="../assets/projects/project-3.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
        <div class="project-card project-card__small">
          <div class="project-card__preview">
            <img src="../assets/projects/project-4.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="project-card-column project-card-column__right">
        <div class="project-card project-card__small">
          <div class="project-card__preview">
            <img src="../assets/projects/project-5.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
        <div class="project-card project-card__big">
          <div class="project-card__preview">
            <img src="../assets/projects/project-6.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
        <div class="project-card project-card__small">
          <div class="project-card__preview">
            <img src="../assets/projects/project-7.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
        <div class="project-card project-card__small">
          <div class="project-card__preview">
            <img src="../assets/projects/project-8.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-if="contentWrappers.bedRoomWrapper" class="bathroom__wrapper container">

      <div class="project-card-column project-card-column__left">
        <div class="project-card project-card__small">
          <div class="project-card__preview">
            <img src="../assets/projects/project-2.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="project-card-column project-card-column__right">
        <div class="project-card project-card__big">
          <div class="project-card__preview">
            <img src="../assets/projects/project-1.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-if="contentWrappers.kitchanWrapper" class="bathroom__wrapper container">

      <div class="project-card-column project-card-column__left">
        <div class="project-card project-card__big">
          <div class="project-card__preview">
            <img src="../assets/projects/project-1.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
        <div class="project-card project-card__small">
          <div class="project-card__preview">
            <img src="../assets/projects/project-5.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="project-card-column project-card-column__right">

        <div class="project-card project-card__small">
          <div class="project-card__preview">
            <img src="../assets/projects/project-8.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-if="contentWrappers.livingAreaWrapper" class="bathroom__wrapper container">

      <div class="project-card-column project-card-column__left">

        <div class="project-card project-card__small">
          <div class="project-card__preview">
            <img src="../assets/projects/project-2.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>

      </div>

      <div class="project-card-column project-card-column__right">
        <div class="project-card project-card__small">
          <div class="project-card__preview">
            <img src="../assets/projects/project-5.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>
        <div class="project-card project-card__big">
          <div class="project-card__preview">
            <img src="../assets/projects/project-6.png" alt="Project preview" class="preview">
          </div>

          <div class="project-card__description">

            <div class="description__wrapper">
              <p class="project-card-title">Minimal Bedroom</p>
              <div class="project-type">
                <p class="project-type__class">
                  {{ bathroomClass }}
                </p>
                <span>/</span>
                <p class="project-type__name">
                  Artchitecture
                </p>
              </div>
            </div>


            <div class="project-link">
              <a href="#">
                <img src="../assets/home-page/news-link.svg">
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>


  </main>

  <main-footer-component></main-footer-component>
</template>

<script>

import MainHeaderComponent from "@/components/MainHeaderComponent.vue";
import MainFooterComponent from "@/components/MainFooterComponent.vue";
import PageFirstBlock from "@/components/PageFirstBlock.vue";

export default {
  name: "ProjectPage",
  components: {PageFirstBlock, MainFooterComponent, MainHeaderComponent},
  data() {
    return {
      pageTitle: "Our project",
      currentWrapper: [],
      contentWrappers: {
        bathroomWrapper: true,
        bedRoomWrapper: false,
        kitchanWrapper: false,
        livingAreaWrapper: false
      },

      // contentWrappers: [
      //   {
      //     bathroomWrapper: true,
      //   },
      //   {
      //     bedRoomWrapper: false,
      //   },
      //   {
      //     kitchanWrapper: false,
      //   },
      //   {
      //     livingAreaWrapper: false
      //   }
      // ],
      bathroomClass: "Bathroom",
    }
  },
  methods: {
    checkProjectWrapper() {

      let initiallyActiveButton = document.querySelector('.controller-button.active');
      initiallyActiveButton ? initiallyActiveButton.classList.remove('active') : null

      const buttons = document.querySelectorAll('.controller-button');
      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          buttons.forEach(function (btn) {
            btn.classList.remove('active');
          });
          this.classList.add('active');
        });
      });

      switch (event.target.innerHTML) {
        case 'Bathroom':
          this.contentWrappers.bathroomWrapper = true;
          this.contentWrappers.bedRoomWrapper = false;
          this.contentWrappers.kitchanWrapper = false;
          this.contentWrappers.livingAreaWrapper = false;
          break;
        case 'Bed Room':
          this.contentWrappers.bathroomWrapper = false;
          this.contentWrappers.bedRoomWrapper = true;
          this.contentWrappers.kitchanWrapper = false;
          this.contentWrappers.livingAreaWrapper = false;
          break;
        case 'Kitchan':
          this.contentWrappers.bathroomWrapper = false;
          this.contentWrappers.bedRoomWrapper = false;
          this.contentWrappers.kitchanWrapper = true;
          this.contentWrappers.livingAreaWrapper = false;
          break;
        case 'Living Area':
          this.contentWrappers.bathroomWrapper = false;
          this.contentWrappers.bedRoomWrapper = false;
          this.contentWrappers.kitchanWrapper = false;
          this.contentWrappers.livingAreaWrapper = true;
          break;
      }

    }
  },
  mounted() {

  }
}

</script>

<style>
.first-block-wrapper {
  background-image: url("../assets/project/project.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 8.136rem;
}

.page-control__wrapper {
  display: flex;
//justify-content: center; max-width: 40rem; width: 100%; margin: 2.09rem auto 2.77rem; border-radius: 0.81818rem; border: 0.045rem solid #CDA274; padding: 0; //gap: 4.26rem;

}

.bathroom__wrapper {
  display: flex;
  gap: 1.32rem;
}

.controller-button {
  color: #292F36;
  font-size: 0.81818rem;
  font-weight: 600;
  line-height: 125%; /* 1.02273rem */
  letter-spacing: 0.01636rem;
  padding: 1.18rem 3rem;

  transition: all .3s linear;
}

.controller-button.active {
  border-radius: 0.81818rem;
  background: #CDA274;
  padding: 1.18rem 3rem;
  color: #FFFFFF;
  transition: all .3s linear;
}

.project-card__description {
  display: flex;
  align-items: center;
}

.description__wrapper {
  margin-right: auto;
}

.project-type {
  display: flex;
}

.project-card__preview {
  margin-bottom: 1.09rem;
}

.project-card {
  transition: all .3s linear;
  margin-bottom: 1.59rem;

  overflow: hidden;
}

.project-card__big {
  max-width: 26.59091rem;
  width: 100%;
}

.project-card__small {
  max-width: 26.59091rem;
  width: 100%;
}

.project-card-title {
  color: #292F36;
  font-family: 'DM Serif Display', serif;
  font-size: 1.13636rem;

  font-weight: 900;
  line-height: 125%; /* 1.42045rem */
  letter-spacing: 0.02273rem;
  margin-bottom: .18rem;
}

.project-type {
  color: #4D5053;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
}

.project-link {
  transition: all .3s linear;
}

.project-link:hover {
  transform: rotate(-45deg);
}


@media (max-width: 1200px) {
  .bathroom__wrapper {
    flex-direction: column;
  }

  .project-card-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 1024px) {
  .page-control__wrapper {
    flex-wrap: wrap;
  //gap: 1rem; justify-content: center; //max-width: 100%;
  }
}

@media (max-width: 425px) {
  .project-card__big .preview {
    width: 100%;
    max-height: 18rem;
  }

  .project-card__small .preview {
    width: 100%;
    max-height: 15rem;
  }

  .controller-button {
    width: 100%;
  }
}
</style>