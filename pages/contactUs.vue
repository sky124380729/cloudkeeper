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
            marker.on('click', function(e) {
                window.open(
                    'https://www.amap.com/search?id=B0FFGCB3HM&city=320571&geoobj=120.427324%7C31.191215%7C120.921709%7C31.413279&query_type=IDQ&query=%E8%8B%8F%E5%B7%9E%E5%98%89%E5%B1%95%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zoom=12'
                )
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
