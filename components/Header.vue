<template>
    <div class="header-box" :class="{ isHomePage }">
        <div class="header">
            <div class="header__left">
                <nuxt-link to="/"><h1 class="logo">嘉展科技</h1></nuxt-link>
                <h2 class="title">{{ $t('header.title') }}</h2>
            </div>
            <div class="header__right">
                <div class="links">
                    <nuxt-link v-for="i in links" :key="i.link" :to="i.link" class="link" :class="{ 'link--active': $route.path === i.link }">{{ $t(i.title) }}</nuxt-link>
                </div>
                <Internationalize />
            </div>
        </div>
    </div>
</template>

<script>
import Internationalize from '@/components/Internationalize'
export default {
    name: 'Header',
    components: {
        Internationalize
    },
    data() {
        return {
            links: [
                {
                    title: 'common.introduction',
                    link: '/introduction'
                },
                {
                    title: 'common.news',
                    link: '/news'
                },
                {
                    title: 'common.productBrief',
                    link: '/productBrief'
                },
                {
                    title: 'common.hiring',
                    link: '/hiring'
                },
                {
                    title: 'common.contactUs',
                    link: '/contactUs'
                }
            ]
        }
    },
    computed: {
        isHomePage() {
            return this.$route.name === 'index'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~css/mixins';
@import '~css/var';
.header-box {
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0;
    z-index: 99;
    background-color: $-color--blue;
    &.isHomePage {
        background-color: transparent;
    }
}
.header {
    @include container;
    @include flex(space-between);
    &__left {
        @include flex;
        .logo {
            width: 226px;
            height: 40px;
            background: url('~imgs/logo.png') no-repeat center;
            background-size: cover;
            text-indent: -9999px;
        }
        .title {
            @include height(35px);
            border-left: 1px solid rgba(255, 255, 255, 0.6);
            margin-left: 13px;
            padding-left: 13px;
            font-size: 24px;
            color: #fff;
        }
    }
    &__right {
        @include flex;
        .link {
            position: relative;
            float: left;
            color: #fff;
            margin-right: 30px;
            line-height: 80px;
            &:hover,
            &--active {
                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 4px;
                    background-color: #fff;
                    top: 0;
                }
            }
        }
    }
}
</style>
