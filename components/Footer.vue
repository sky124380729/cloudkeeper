<template>
    <div class="footer-box">
        <div class="footer">
            <div class="footer__top">
                <div class="footer__left">
                    <img class="sensor" src="~imgs/sensor.png" alt="" />
                    <ul class="info">
                        <li>{{ $t('footer.phone') }}</li>
                        <li>{{ $t('footer.email') }}</li>
                        <li>{{ $t('footer.addr') }}</li>
                    </ul>
                </div>
                <div class="footer__right">
                    <dl>
                        <dt>{{ $t('common.home') }}</dt>
                    </dl>
                    <dl>
                        <dt>{{ $t('common.introduction') }}</dt>
                    </dl>
                    <dl>
                        <dt>{{ $t('common.news') }}</dt>
                    </dl>
                    <dl>
                        <dt>{{ $t('common.productBrief') }}</dt>
                        <dd>融资租赁</dd>
                        <dd>金融租赁</dd>
                    </dl>
                    <dl>
                        <dt>{{ $t('common.hiring') }}</dt>
                    </dl>
                    <dl>
                        <dt>{{ $t('common.contactUs') }}</dt>
                    </dl>
                </div>
            </div>
            <div class="footer__bottom">
                <h2 class="copyright">{{ $t('footer.copyright') }}</h2>
                <p class="emblem">
                    <span>{{ $t('footer.record') }}</span>
                    <img src="~imgs/national_emblem.png" alt="" />
                    <span>{{ $t('footer.code') }}</span>
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
            @include flex(space-between);
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
            @include flex(space-between, flex-start);
            dl {
                margin-left: 40px;
            }
            dt,
            dd {
                font-size: 12px;
                line-height: 18px;
            }
            dd {
                margin-top: 20px;
                opacity: 0.2;
            }
        }
    }
}
</style>
