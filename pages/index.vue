<template>
    <div class="homepage">
        <h2>{{ $t('homepage.slogan') }}</h2>
        <p class="title">{{ $t('homepage.title') }}</p>
        <p class="content">{{ $t('homepage.content1') }}</p>
        <p class="content">{{ $t('homepage.content2') }}</p>
        <p class="content">{{ $t('homepage.content3') }}</p>
        <p class="content">{{ $t('homepage.content4') }}</p>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.homepage {
    height: 100%;
    min-height: 430px;
    box-sizing: border-box;
    padding: 80px 40px 0;
    background: url('~imgs/bg.png') no-repeat center;
    background-size: cover;
    text-align: center;
    color: #fff;
    h2 {
        font-size: 36px;
        font-weight: bold;
        color: rgba(36, 161, 255, 1);
        line-height: 48px;
        margin-top: 80px;
    }
    p.title {
        font-size: 18px;
        margin: 20px 0 40px;
    }
    p.content {
        width: 400px;
        margin: 0 auto;
        font-size: 16px;
        line-height: 30px;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
}

@media screen and (max-width: 1366px) {
    .homepage {
        h2 {
            margin-top: 40px;
        }
    }
}

@media screen and (max-width: 1200px) {
    .homepage {
        min-height: 800px;
        background: url('~imgs/bg_mobile.png') no-repeat center;
        h2 {
            margin-top: 100px;
            font-size: 48px;
        }
        p.title {
            margin: 40px 0 80px;
            font-size: 34px;
        }
        p.content {
            width: 100%;
            font-size: 28px;
            line-height: 48px;
        }
    }
}
</style>
