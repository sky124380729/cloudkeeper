<template>
    <div class="app-main">
        <Loading :delay="500" />
        <div class="content">
            <Header />
            <nuxt />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Loading from '~/components/Loading.vue'

export default {
    components: {
        Header,
        Footer,
        Loading
    }
}
</script>

<style lang="scss" scoped>
.app-main {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .content {
        flex: 1;
    }
    .footer-box {
        flex: 0;
    }
}
</style>
