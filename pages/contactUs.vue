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
import markerIcon from '../assets/imgs/marker.png'
export default {
    name: 'ContactUs',
    layout: 'content',
    data() {
        return {}
    },
    mounted() {
        this.initMap()
    },
    methods: {
        initMap() {
            const Lng = 120.7223438842
            const Lat = 31.3204493327
            /* global AMap */
            const map = new AMap.Map('map', {
                resizeEnable: true,
                center: [Lng, Lat],
                zoom: 14,
                viewMode: '3D'
            })
            const icon = new AMap.Icon({
                image: markerIcon, // Icon的图像
                imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
                imageSize: new AMap.Size(40, 40) // 根据所设置的大小拉伸或压缩图片
            })
            const marker = new AMap.Marker({
                position: new AMap.LngLat(Lng, Lat),
                offset: new AMap.Pixel(-10, -10),
                icon, // 添加 Icon 实例
                title: '苏州嘉展科技有限公司',
                zoom: 13
            })
            map.add(marker)
        }
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
            margin-left: 40px;
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
