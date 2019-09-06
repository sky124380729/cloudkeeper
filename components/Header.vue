<template>
    <!-- PC端 -->
    <div v-if="!isMobile" class="header-box" :class="{ isHomePage, shrink }">
        <div class="header container">
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
    <!-- 移动端 -->
    <div v-else class="mobile-header" :class="{ active: dropdownVisible }">
        <div class="nav-top">
            <nuxt-link to="/"><h1 class="logo">嘉展科技</h1></nuxt-link>
            <a href="javascript:void(0);" @click="dropdownVisible = !dropdownVisible">
                <span v-if="dropdownVisible">×</span>
                <span v-else>=</span>
            </a>
        </div>
        <transition name="dropdown">
            <div class="dropdown" @click="dropdownVisible = false">
                <nuxt-link v-for="i in links" :key="i.link" :to="i.link" class="dropdown__list" :class="{ 'dropdown__list--active': $route.path === i.link }">{{
                    $t(i.title)
                }}</nuxt-link>
            </div>
        </transition>
    </div>
</template>

<script>
import isTel from '../assets/isMobile'
import Internationalize from '@/components/Internationalize'
export default {
    name: 'Header',
    components: {
        Internationalize
    },
    data() {
        return {
            isMobile: '',
            shrink: false,
            dropdownVisible: false,
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
    },
    mounted() {
        const vm = this
        if (process.browser) {
            window.addEventListener('scroll', function(e) {
                const top = document.documentElement.scrollTop
                vm.shrink = top > 0
            })
        }
        this.isMobile = isTel()
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
    transition: all 0.3s;
    line-height: 80px;
    &.isHomePage {
        background-color: rgba(0, 0, 0, 0.6);
    }
    &.shrink {
        height: 60px;
        line-height: 60px;
    }
    .header {
        @include flex(space-between);
        &__left {
            @include flex;
            .logo {
                width: 135.6px;
                height: 24px;
                background: url('~imgs/logo.png') no-repeat center;
                background-size: cover;
                text-indent: -9999px;
            }
            .title {
                @include height(35px);
                border-left: 1px solid rgba(255, 255, 255, 0.6);
                margin-left: 13px;
                padding-left: 13px;
                font-weight: normal;
                font-size: 20px;
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
                font-size: 16px;
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
}

.mobile-header {
    height: 96px;
    overflow: hidden;
    transition: height 0.3s;
    &.active {
        height: 498px;
    }
    .nav-top {
        height: 96px;
        @include flex(space-between);
        padding: 0 40px;
        background-color: $-color--blue;
        color: #fff;
        font-size: 36px;
        .logo {
            width: 240px;
            height: 80px;
            background: url('~imgs/logo.png') no-repeat center;
            background-size: contain;
            text-indent: -9999px;
        }
    }
    .dropdown {
        padding: 0 40px;
        border-bottom: 1px solid #e7e7e7;
        &__list {
            display: block;
            height: 80px;
            line-height: 80px;
            background-color: #fff;
            font-size: 24px;
        }
    }
}
</style>
