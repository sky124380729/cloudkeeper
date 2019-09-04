<template>
    <div class="news">
        <h3>新闻中心</h3>
        <div class="news-container">
            <ul>
                <li v-for="item in newsList" :key="item.id" class="news-list">
                    <img src="~/imgs/news.png" alt="" />
                    <div class="news-content">
                        <nuxt-link :to="'/news/' + item.id" class="news-link">{{ item.title }}</nuxt-link>
                        <p class="news-tips">
                            <span class="resource">{{ item.resource }}</span>
                            <span class="split"></span>
                            <span class="time">{{ item.time }}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'News',
    layout: 'content',
    data() {
        return {
            newsList: [
                {
                    id: '1',
                    title: '万字长文披露央行《金融科技（FinTech）发展规划》',
                    resource: '21世纪经济报道',
                    time: '2019-08-23 21:04'
                },
                {
                    id: '2',
                    title: '万字长文披露央行《金融科技（FinTech）发展规划》',
                    resource: '21世纪经济报道',
                    time: '2019-08-23 21:04'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~css/var';
.news {
    h3 {
        font-size: 18px;
        font-weight: bold;
        color: rgba(48, 49, 51, 1);
        line-height: 18px;
        margin-bottom: 20px;
    }
    .news-list {
        display: flex;
        margin-bottom: 30px;
        img {
            width: 140px;
            height: 88px;
        }
        .news-content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 20px;
        }
        .news-link {
            font-size: 20px;
            color: #303133;
            line-height: 18px;
            &:hover {
                color: $-color--blue;
            }
        }
        .news-tips {
            color: #919499;
            line-height: 18px;
        }
        .split {
            position: relative;
            top: 2px;
            display: inline-block;
            margin: 0 10px;
            width: 1px;
            height: 16px;
            background-color: #dadee6;
        }
    }
}
</style>
