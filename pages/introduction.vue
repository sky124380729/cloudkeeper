<template>
    <div class="introduction">
        <h3>{{ $t('introduction.title') }}</h3>
        <p class="content">{{ $t('introduction.content1') }}</p>
        <p class="content">{{ $t('introduction.content2') }}</p>
        <p class="content">{{ $t('introduction.content3') }}</p>
        <p class="content">{{ $t('introduction.content4') }}</p>

        <img class="ceremony" src="~imgs/ceremony.png" alt="" />
    </div>
</template>

<script>
export default {
    name: 'Introduction',
    layout: 'content',
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.introduction {
    h3 {
        font-size: 18px;
        font-weight: bold;
        color: rgba(48, 49, 51, 1);
        line-height: 18px;
    }
    .content {
        font-size: 14px;
        color: rgba(97, 99, 102, 1);
        margin-top: 26px;
    }
    .ceremony {
        display: block;
        margin: 30px auto;
    }
}

@media screen and (max-width: 1200px) {
    .introduction {
        .ceremony {
            width: 100%;
        }
    }
}

@media screen and (max-width: 1200px) {
    .introduction {
        h3 {
            font-size: 36px;
            line-height: 36px;
        }
        .content {
            font-size: 28px;
            color: rgba(97, 99, 102, 1);
            margin-top: 52px;
        }
        .ceremony {
            margin: 60px auto;
        }
    }
}
</style>
