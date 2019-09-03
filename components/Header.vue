<template>
    <div class="header-box" :style="{ backgroundColor: bgColor }">
        <div class="header">
            <div class="header__left">
                <h1 class="logo">嘉展科技</h1>
                <h2 class="title">租赁资产管理服务商</h2>
            </div>
            <div class="header__right">
                <div class="links">
                    <nuxt-link v-for="i in links" :key="i.link" :to="i.link" class="link">{{ i.title }}</nuxt-link>
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
    props: {
        bgColor: {
            type: String,
            default: '#0091FF'
        }
    },
    data() {
        return {
            links: [
                {
                    title: '公司简介',
                    link: '/introduction1'
                },
                {
                    title: '新闻中心',
                    link: '/introduction2'
                },
                {
                    title: '产品介绍',
                    link: '/introduction3'
                },
                {
                    title: '人才招聘',
                    link: '/introduction4'
                },
                {
                    title: '联系我们',
                    link: '/introduction5'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~css/mixins';
.header-box {
    height: 100px;
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
            line-height: 100px;
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
