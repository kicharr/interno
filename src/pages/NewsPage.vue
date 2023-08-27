<template>
  <main-header-component></main-header-component>
  <main class="main__wrapper">
    <div class="first-block-wrapper">
      <page-first-block :page-title="pageTitle"></page-first-block>
    </div>

    <div class="main-content__wrapper container">

      <section class="last-post__wrapper">
        <div class="title-left last-post-title__wrapper">
          <h2>Latest Post</h2>
        </div>

        <div class="last-post__post">
          <div class="last-post__preview">
            <img src="../assets/news-page/last-news.jpg" alt="Last post preview" class="post-preview">
          </div>


          <div class="last-post__description">
            <div class="last-post__post-title">
              <h4>Low Cost Latest Invented Interior Designing Ideas</h4>
            </div>
            <p class="last-post-description__text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary
              to popular belief.
            </p>
            <p class="last-post-description__text">
              Lorem Ipsum is not simply random text. It has roots in a piece of classica.
            </p>

            <div class="last-post-date">
              <p class="post-date">
                26 December,2022
              </p>

              <div class="post-link__wrapper">
                <a href="#" class="post-link">
                  <img src="../assets/home-page/news-link.svg">
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="articles-news__wrapper">
        <div class="title-left articles-title__wrapper">
          <h2>Articles & News</h2>

          <input
              type="text"
              class="input input-search__news"
              placeholder="Start write.."

              v-model="query"
          />

        </div>


        <section class="news__wrapper">
          <news-cards
              v-for="(card, index) in newsCardsList" :key="index"
              :news-title="card?.newsTitle"
              :news-preview="card?.newsPreview"
              :news-preview-descripyion="card?.newsPreviewDescripyion"
              :news-date="card?.newsDate"
          >
          </news-cards>
        </section>
      </section>
    </div>
  </main>
  <main-footer-component></main-footer-component>
</template>

<script>
import MainHeaderComponent from "@/components/MainHeaderComponent.vue";
import MainFooterComponent from "@/components/MainFooterComponent.vue";
import PageFirstBlock from "@/components/PageFirstBlock.vue";
import NewsCards from "@/components/NewsCards.vue";

export default {
  name: 'NewsPage',
  components: {NewsCards, PageFirstBlock, MainHeaderComponent, MainFooterComponent},


  data() {
    return {
      pageTitle: 'Articles & News',
      newsCardsList: [],

    }
  },
  // methods: {
  //   searchNews() {
  //     const query = ref('');
  //
  //     const queryNews = ()=> {
  //       return this.newsCardsList.value;
  //     }
  //
  //   }
  //
  // },
  computed: {},
  beforeMount() {
    fetch("https://res.cloudinary.com/dui2dgzj2/raw/upload/v1692894656/news_e7hwpc.json")
        .then(res => res.json())
        .then(data => this.newsCardsList = data)
  }
}


</script>

<style scoped>
.first-block-wrapper {
  background-image: url("../assets/news-page/main-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 8.136rem;
}

.main-content__wrapper {
  margin: 9.09rem auto;
}

.last-post-title__wrapper {
  margin-bottom: 2.23rem;
}

.title-left h1 {
  color: #292F36;
  font-family: "DM", serif;
  font-size: 2.27273rem;
  line-height: 125%; /* 2.84091rem */
  letter-spacing: 0.04545rem;
}

.last-post__post {
  display: flex;
  align-items: center;
  gap: 2.95rem;
//padding: 0 1rem; margin-bottom: 7.82rem;
}

.post-preview {
  max-width: 25rem;
}

.last-post__post-title {
  margin-bottom: 1rem;
}

.last-post__post-title h4 {
  color: #292F36;
  font-family: "DM", serif;
  font-size: 1.33636rem;
  line-height: 125%; /* 1.42045rem */
  letter-spacing: 0.02273rem;
}

.last-post-description__text {
  color: #4D5053;
  line-height: 150%;
  letter-spacing: 0.01rem;
  margin-bottom: 1.5rem;
}

.last-post-description__text:last-child {
  margin-bottom: 0;
}

.last-post-date {
  display: flex;
  align-items: center;
}

.post-date {
  color: #4D5053;
//font-family: Jost; font-size: 0.72727rem; line-height: 150%; /* 1.09091rem */ letter-spacing: 0.00727rem; text-transform: capitalize;
  margin-right: auto;
}

.articles-news__wrapper {
  margin-bottom: 1.36rem;
}

.articles-title__wrapper h2 {
  margin-right: auto;
}

.articles-title__wrapper {
  display: flex;
  margin-bottom: 1.36rem;
}

.news__wrapper {
  display: flex;
}

@media (max-width: 1200px) {
  .last-post__post {
    flex-direction: column;
  }

  .news__wrapper {
    display: flex;
  //justify-content: center; flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .articles-title__wrapper {
    gap: 1rem;
    flex-direction: column;
  }
}

@media (max-width: 425px) {
  .news__wrapper {
    justify-content: center;
  }

  .post-preview {
    max-width: 15rem;
  }
}
</style>