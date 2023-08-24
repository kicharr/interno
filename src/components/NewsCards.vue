<template>
  <div class="separate-news-card">
    <a class="sep-news-card__link" href="#">
      <div class="news-card__preview">
        <img :src="newsPreview" alt="News preview">
        <div class="card-preview__description">
          <p class="preview-text">{{ newsPreviewDescripyion }}</p>
        </div>
      </div>
      <p
          class="news-card-title">
        {{ newsTitle }}
      </p>

      <div class="news-card-footer">
        <div class="news-card__date">
          <p class="date-text">
            {{ newsDate }}
          </p>

          <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC"/>
            <path d="M23.771 33.22L29.7139 26.5343L23.771 19.8485" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>
      </div>

    </a>
  </div>
</template>

<script>

export default {
  name: "NewsCards",
  props: ["newsPreview", "newsPreviewDescripyion", "newsTitle", "newsDate"]
}

</script>

<style scoped>
.separate-news-card {
  border-radius: 2.81818rem;
  border: 1px solid #E7E7E7;
  box-shadow: 0 0.455rem 1.364rem 0 rgba(255, 255, 255, 0.25);
  padding: 0.95rem;
  margin-right: 1.23rem;
  transition: all .3s linear;
}

.separate-news-card:last-child {
  margin-right: 0;
}

.sep-news-card__link {
  transition: all .3s linear;
}

.separate-news-card:hover {
  border: 1px solid #E7E7E7;
  background-color: #F4F0EC;
  box-shadow: 0 0.455rem 1.364rem 0 rgba(255, 255, 255, 0.25);
}

.separate-news-card:hover .news-card__date svg {
  transform: rotate(-45deg);
}

.separate-news-card:hover .news-card__date svg circle {

  fill: #FFFFFF;
}


.news-card__preview {
  margin-bottom: 0.95rem;

  position: relative;
  z-index: 3;
}

.card-preview__description {
  position: absolute;
  bottom: 0.92rem;
  left: 0.91rem;
  z-index: 4;
  border-radius: 0.36364rem 0.36364rem 0.36364rem 0;
  background: #FFF;
  padding: 0.36rem 0.45rem 0.41rem;
}

.preview-text {
  color: #4D5053;
  font-size: 0.72727rem;
  line-height: 150%;
  letter-spacing: 0.00727rem;
  text-transform: capitalize;
}

.news-card-title {
  max-width: 14.86364rem;
  width: 100%;
  font-family: 'DM Serif Display', serif;
  font-style: normal;
  font-weight: 900;
  color: #292F36;
  font-size: 1.13636rem;
  line-height: 125%; /* 1.42045rem */
  letter-spacing: 0.02273rem;
  margin-bottom: 1.36rem;

}

.news-card__date {
  display: flex;
  align-items: center;
}

.date-text {
  color: #4D5053;
  font-size: 0.72727rem;
  line-height: 150%;
  letter-spacing: 0.00727rem;
  text-transform: capitalize;

  margin-right: auto;
}



@media (max-width: 768px) {
  .news-card__preview img {
    //max-width: 15.45455rem;
    width: 100%;
  }

  .separate-news-card {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1.23rem;
  }
}


</style>