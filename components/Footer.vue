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
                        <dt>
                            <nuxt-link to="/">{{ $t('common.home') }}</nuxt-link>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <nuxt-link to="/introduction">{{ $t('common.introduction') }}</nuxt-link>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <nuxt-link to="/news">{{ $t('common.news') }}</nuxt-link>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <nuxt-link to="/productBrief">{{ $t('common.productBrief') }}</nuxt-link>
                        </dt>
                        <dd>{{ $t('footer.product1') }}</dd>
                        <dd>{{ $t('footer.product2') }}</dd>
                    </dl>
                    <dl>
                        <dt>
                            <nuxt-link to="/hiring">{{ $t('common.hiring') }}</nuxt-link>
                        </dt>
                    </dl>
                    <dl>
                        <dt>
                            <nuxt-link to="/contactUs">{{ $t('common.contactUs') }}</nuxt-link>
                        </dt>
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
    min-height: 275px;
    background-color: #000;
    color: #fff;
    .footer {
        @include container;
        display: flex;
        flex-direction: column;
        &__top {
            @include flex(space-between);
            padding: 30px 0;
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
                margin-top: 20px;
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
                margin-top: 14px;
                opacity: 0.2;
            }
        }
    }
}

@media screen and (max-width: 1366px) {
    .footer-box {
        min-height: 190px;
        .footer {
            &__top {
                padding: 10px 0;
            }
            &__bottom {
                .copyright,
                .emblem {
                    font-size: 12px;
                    line-height: 16px;
                    text-align: center;
                    margin: 8px 0;
                }
                .emblem img {
                    vertical-align: bottom;
                }
            }
            &__left {
                .sensor {
                    width: 143px;
                    height: 36px;
                }
                .info {
                    margin-top: 10px;
                    font-size: 12px;
                    line-height: 18px;
                }
            }
            &__right {
                dd {
                    margin-top: 14px;
                }
            }
        }
    }
}
</style>
