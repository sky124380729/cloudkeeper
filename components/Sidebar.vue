<template>
    <div class="sidebar">
        <nuxt-link v-for="i in links" :key="i.link" class="sidebar__item" :class="{ active: $route.path === i.link }" :to="i.link">{{ $t(i.title) }}</nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
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
    }
}
</script>

<style lang="scss" scoped>
@import '~css/var';
.container {
    background-color: #fff;
    overflow: hidden;
}
.sidebar {
    width: 174px;
    text-align: right;
    margin-top: 30px;
    border-top: 1px solid #e6eaf2;
    &__item {
        display: block;
        height: 44px;
        line-height: 44px;
        color: #616366;
        border-bottom: 1px solid #e6eaf2;
        padding-right: 9px;
        &.active {
            font-weight: bold;
            color: $-color--blue;
            border-right: 2px solid $-color--blue;
        }
    }
}
</style>
