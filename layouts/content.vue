<template>
    <div class="app-main">
        <Loading />
        <div class="app-main__content">
            <Header />
            <div class="app-main__page" :style="{ paddingTop: isMoble ? 0 : '80px' }">
                <div class="container">
                    <Sidebar v-if="!isMoble" />
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
import isTel from '../assets/isMobile'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Sidebar from '~/components/Sidebar.vue'
import Loading from '~/components/Loading.vue'

export default {
    components: {
        Header,
        Footer,
        Sidebar,
        Loading
    },
    data() {
        return {
            isMoble: ''
        }
    },
    mounted() {
        this.isMoble = isTel()
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
        width: 100%;
        flex: 1;
        padding: 30px;
        min-height: 500px;
    }
}
</style>
