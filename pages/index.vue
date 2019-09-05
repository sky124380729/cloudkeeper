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
    min-height: 580px;
    box-sizing: border-box;
    padding-top: 80px;
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
</style>
