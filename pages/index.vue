<template>
    <div class="app-main">
        <div class="content">
            <Header />
        </div>

        <Footer />
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
    components: {
        Header,
        Footer
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
