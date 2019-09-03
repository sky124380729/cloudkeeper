<template>
    <div class="footer-box">
        <div class="footer">
            <div class="footer__top">
                <div class="footer__left">
                    <img class="sensor" src="~imgs/sensor.png" alt="" />
                    <ul class="info">
                        <li>电话：400-660-8237</li>
                        <li>邮箱：service@cloudkeeper.cn</li>
                        <li>地址：苏州工业园区旺墩路188号建屋大厦908室</li>
                    </ul>
                </div>
                <div class="footer__right"></div>
            </div>
            <div class="footer__bottom">
                <h2 class="copyright">版权所有：苏州嘉展科技有限公司</h2>
                <p class="emblem">
                    <span>备案/许可证号：苏ICP备16035008号</span>
                    <img src="~imgs/national_emblem.png" alt="" />
                    <span>苏公网安备 32059002002358号</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '~css/mixins';
.footer-box {
    min-height: 280px;
    background-color: #000;
    color: #fff;
    .footer {
        @include container;
        display: flex;
        flex-direction: column;
        &__top {
            padding: 30px;
            border-bottom: 1px solid rgba(238, 238, 238, 0.2);
        }
        &__bottom {
            .copyright,
            .emblem {
                font-size: 12px;
                line-height: 18px;
                text-align: center;
                margin: 13px 0;
            }
            .emblem img {
                vertical-align: bottom;
            }
        }
        &__left {
            .sensor {
                width: 214px;
                height: 54px;
            }
            .info {
                margin-top: 30px;
                font-size: 12px;
                line-height: 18px;
            }
        }
        &__right {
        }
    }
}
</style>
