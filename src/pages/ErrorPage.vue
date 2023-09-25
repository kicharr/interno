<template>
    <main-header-component></main-header-component>

    <main class="main__wrapper ">
        <div class="error-page-content__wrapper container">
            <div class="error-page__content">
                <div class="error-page-title">
                    <h1>404</h1>
                </div>
                <div class="error-page-description">
                    <p class="descr-text">
                        We are sorry, but the page
                        you requested was not found
                    </p>
                </div>
                <router-link to="/" class="main-button main-button__link">
                    Back To Home
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </router-link>
            </div>

            <div class="error-page__preview">
                <img src="../assets/error-page.png" alt="Error preview img">
            </div>

        </div>



    </main>
</template>





<script>
import MainHeaderComponent from "@/components/MainHeaderComponent.vue";

export default {
    name: "ErrorPage",
    components: { MainHeaderComponent }

}
</script>

<style scoped>
.error-page-content__wrapper {
    position: relative;
}

.error-page__preview {
    position: absolute;
    right: 0;
    top: 0;
}

.main__wrapper {
    display: flex;
}

.error-page-title {
    margin-bottom: .68rem;
}

.error-page-title h1 {
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 11.36364rem;
    line-height: 125%;
    /* 14.20455rem */
}

.error-page-description {
    margin-bottom: 1.05rem;
}

.descr-text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 1.59091rem;

    font-weight: 700;
    line-height: 150%;
    /* 2.38636rem */
    letter-spacing: 0.01591rem;
}

.error-page__content {
    max-width: 25.86364rem;
    width: 100%;
}

.main-button {
    max-width: 12rem;
    width: 100%;
}
</style>