<template>
    <div class="news">
        <h3>新闻中心</h3>
        <div class="news-container">
            <ul>
                <li v-for="item in newsList" :key="item.id" class="news-list">
                    <img class="news-image" :src="item.img" alt="" />
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
                    time: '2019-08-23 21:04',
                    img: require('../../assets/imgs/new_1.png')
                },
                {
                    id: '2',
                    title: '融资租赁业：直面发展痛点 提升风险防控能力',
                    resource: '融资租赁专业知识讲座',
                    time: '2019-08-30 12:04',
                    img: require('../../assets/imgs/new_default.jpg')
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
            font-size: 18px;
            color: #303133;
            line-height: 18px;
            &:hover {
                color: $-color--blue;
            }
        }
        .news-tips {
            color: #919499;
            font-size: 14px;
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
@media screen and (max-width: 1200px) {
    .news {
        h3 {
            font-size: 36px;
            line-height: 36px;
            margin-bottom: 40px;
        }
        .news-list {
            margin-bottom: 60px;
            img {
                width: 180px;
                height: 113px;
            }
            .news-content {
                margin-left: 40px;
            }
            .news-link {
                font-size: 24px;
                line-height: 40px;
                word-break: break-all;
            }
            .news-tips {
                font-size: 18px;
                line-height: 18px;
            }
        }
    }
}
</style>
