<template>
    <div v-if="!isMoble" class="footer-box">
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
                    <dl v-for="i in links" :key="i.link" :to="i.link">
                        <dt>
                            <nuxt-link :to="i.link">{{ $t(i.title) }}</nuxt-link>
                        </dt>
                        <template v-if="i.children">
                            <dd v-for="j in i.children" :key="j">{{ $t(j) }}</dd>
                        </template>
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

    <div v-else class="mobile-footer">
        <div class="top">
            <Internationalize />
            <h2 class="copyright">{{ $t('footer.copyright') }}</h2>
            <p class="emblem">
                <span>{{ $t('footer.record') }}</span>
                <span>{{ $t('footer.code') }}</span>
            </p>
        </div>
        <a v-if="goTopVisible" class="bottom" href="javascript:void(0);" @click="goTop">
            回到顶部
        </a>
    </div>
</template>

<script>
import isTel from '../assets/isMobile'
import Internationalize from '@/components/Internationalize'
export default {
    components: {
        Internationalize
    },
    data() {
        return {
            isMoble: '',
            goTopVisible: false,
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
                    link: '/productBrief',
                    children: ['footer.product1', 'footer.product2']
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
    watch: {
        $route: {
            handler() {
                this.goTopJugle()
            },
            immediate: true
        }
    },
    mounted() {
        this.isMoble = isTel()
        this.goTopJugle()
    },
    methods: {
        goTopJugle() {
            if (process.browser) {
                this.goTopVisible = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
            }
        },
        goTop() {
            if (process.browser) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        }
    }
}
</script>

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

.mobile-footer {
    color: #fff;

    .top {
        background-color: #373d41;
        padding: 20px 60px;
        h2,
        p {
            font-size: 19px;
            text-align: left;
            margin: 10px 0;
        }
    }
    .bottom {
        display: block;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: #31373b;
    }
}
</style>
