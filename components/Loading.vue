<template>
    <section v-if="isLoading" class="bg">
        <div class="cp-spinner cp-eclipse" />
    </section>
</template>
<script>
export default {
    props: {
        delay: {
            type: Number,
            default: 0
        }
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading
        }
    },
    mounted() {
        setTimeout(() => {
            this.$store.commit('CLOSE_LOADING')
        }, this.delay)
    }
}
</script>
<style scoped lang="scss">
.bg {
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #47b3a3;
    text-align: left;
}
@keyframes cp-eclipse-animate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
.cp-eclipse {
    width: 12px;
    height: 12px;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 50%;
    background: white;
    animation: cp-eclipse-animate 1s linear infinite;
    &:before {
        border-radius: 50%;
        content: ' ';
        width: 48px;
        height: 48px;
        display: inline-block;
        box-sizing: border-box;
        border-top: solid 6px transparent;
        border-right: solid 6px white;
        border-bottom: solid 6px transparent;
        border-left: solid 6px transparent;
        position: absolute;
        top: -18px;
        left: -18px;
    }
    &:after {
        border-radius: 50%;
        content: ' ';
        width: 48px;
        height: 48px;
        display: inline-block;
        box-sizing: border-box;
        border-top: solid 6px transparent;
        border-right: solid 6px transparent;
        border-bottom: solid 6px transparent;
        border-left: solid 6px white;
        position: absolute;
        top: -18px;
        right: -18px;
    }
}
.cp-spinner {
    position: relative;
    z-index: 100001;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
}
</style>
