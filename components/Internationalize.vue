<template>
    <div class="internationalize">
        <span class="font" :class="{ 'font--link': lan === 'cn' }" @click="setLang('cn')">简</span>
        <span class="split"></span>
        <span class="font" :class="{ 'font--link': lan === 'tw' }" @click="setLang('tw')">繁</span>
    </div>
</template>

<script>
export default {
    name: 'Internationalize',
    computed: {
        lan() {
            return this.$store.state.locale
        }
    },
    methods: {
        setLang(lan) {
            this.$store.commit('SET_LANG', lan)
            this.$i18n.locale = lan
        }
    }
}
</script>

<style lang="scss" scoped>
.internationalize {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 0;
    .font {
        font-size: 14px;
        cursor: pointer;
        opacity: 0.6;
        &--link {
            opacity: 1;
        }
    }
    .split {
        width: 1px;
        height: 12px;
        margin: 0 8px;
        background: rgba(242, 246, 250, 1);
        opacity: 0.3;
    }
}
</style>
