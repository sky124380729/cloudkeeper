<template>
    <div class="news">
        <h3>新闻中心</h3>
        <div class="news-container"></div>
    </div>
</template>

<script>
export default {
    name: 'News',
    layout: 'content',
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.news {
    h3 {
        font-size: 18px;
        font-weight: bold;
        color: rgba(48, 49, 51, 1);
        line-height: 18px;
        margin-bottom: 20px;
    }
}
</style>
