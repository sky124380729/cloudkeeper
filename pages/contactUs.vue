<template>
    <div class="contactUs">
        <h3>{{ $t('contactUs.title') }}</h3>
        <img class="handshake" src="~imgs/handshake.png" alt="" />
        <div class="info">
            <div id="map"></div>
            <div class="tips">
                <dl>
                    <dt>{{ $t('contactUs.dt') }}</dt>
                    <dd>{{ $t('contactUs.dd1') }}</dd>
                    <dd>{{ $t('contactUs.dd2') }}</dd>
                    <dd>{{ $t('contactUs.dd3') }}</dd>
                    <dd>{{ $t('contactUs.dd4') }}</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactUs',
    layout: 'content',
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@import '~css/mixins';
@import '~css/var';
.contactUs {
    h3 {
        font-size: 18px;
        font-weight: bold;
        color: rgba(48, 49, 51, 1);
        line-height: 18px;
    }
    .handshake {
        display: block;
        width: 100%;
        margin: 30px auto;
    }
    .info {
        @include flex(flex-start);
        #map {
            width: 380px;
            height: 200px;
        }
        .tips {
            dt {
                font-size: 18px;
                font-weight: bold;
                color: $-color--blue;
                margin-bottom: 10px;
            }
            dd {
                color: #616366;
                line-height: 24px;
            }
        }
    }
}
</style>
