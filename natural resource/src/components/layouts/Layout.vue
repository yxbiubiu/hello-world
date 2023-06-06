<template>
    <div class="layout">
        <el-container class="layout_container">
            <el-aside class="layout_left">
                <TheSider />
            </el-aside>
            <el-container class="layout_right">
                <el-header height="6rem">
                    <TheHeader />
                </el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import TheHeader from './TheHeader.vue'
import TheSider from './TheSider.vue'

</script>

<style scoped>
.layout,
.layout_container {
    height: 100%;
    background: radial-gradient(rgba(4, 15, 62, 1.00), rgba(0, 2, 12, 1.00));
}

.layout_left {
    width: auto;
}
</style>