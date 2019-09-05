<template>
    <div class="app-main">
        <div class="app-main__content">
            <Header />
            <div class="app-main__page">
                <div class="container">
                    <Sidebar />
                    <div class="main">
                        <nuxt />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
    components: {
        Header,
        Footer,
        Sidebar
    }
}
</script>

<style lang="scss" scoped>
.app-main {
    display: flex;
    flex-direction: column;
    height: 100vh;
    &__content {
        flex: 1;
    }
    &__page {
        height: 100%;
        box-sizing: border-box;
        padding-top: 80px;
        background-color: #f2f6fa;
    }
    .footer-box {
        flex: 0;
    }
    .container {
        background-color: #fff;
        overflow: hidden;
        display: flex;
    }
    .main {
        flex: 1;
        padding: 30px;
        min-height: 400px;
    }
}
</style>
