<template>
    <div class="internationalize">
        <span class="font font--link">简</span>
        <span class="split"></span>
        <span class="font">繁</span>
    </div>
</template>

<style lang="scss" scoped>
.internationalize {
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
        display: inline-block;
        width: 1px;
        height: 12px;
        margin: 0 8px;
        background: rgba(242, 246, 250, 1);
        opacity: 0.3;
    }
}
</style>
