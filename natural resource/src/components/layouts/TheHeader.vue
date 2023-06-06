<template>
    <div class="header_conrainer flex_between">
        <el-link class="header_left" :underline="false" @click="menuStore.change()"></el-link>
        <el-link :underline="false" class="header_center">阿坝州自然资源展示平台</el-link>
        <div calss="header_right"></div>
    </div>
</template>

<script setup>
import { useMenuStore } from '../../stores/menuData'
const menuStore = useMenuStore()
</script>

<style scoped>
.header_conrainer {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url(../../assets/imgs/header.png);
    background-size: 100% 100%;
    background-position: 0 .5rem;
    line-height: 6rem;
    text-align: center;
}

.header_left {
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-image: url('../../assets/imgs/header_btn.png');
    background-size: contain;
}

.header_center {
    color: #9fc1e8;
    font-size: 2rem;
}
</style>