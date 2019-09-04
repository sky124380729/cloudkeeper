<template>
    <div class="homePage">
        <h2>租赁行业的未来 数据租赁</h2>
        <p class="title">
            真正的大数据开始于网络连接，我们提供给伙伴的不仅是资产管理，更是趋势分析。
        </p>
        <p class="content">我们通过专利技术的优势及应用终端广泛的兼容性</p>
        <p class="content">将物联网发展推到一个新的层次</p>
        <p class="content">对租赁资产皆可提供更及时的数据传输</p>
        <p class="content">同时实现更快的数据处理和数据共享平台服务</p>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.homePage {
    height: 100%;
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
        margin-top: 100px;
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
