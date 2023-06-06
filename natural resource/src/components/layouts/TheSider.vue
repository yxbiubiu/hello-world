<template>
    <div class="sider_container">
        <el-menu class="sider_menu" text-color="#91b3f3" background-color="ff0000" default-active="2"
            :collapse="menuStore.isCollapse" :unique-opened="true" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>One</span>
                </template>
                <el-menu-item-group class="test">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>Two</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>Three</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">item one</el-menu-item>
                    <el-menu-item index="3-2">item two</el-menu-item>
                    <el-menu-item index="3-3">item three</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
import { useMenuStore } from '../../stores/menuData'
const menuStore = useMenuStore()

const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.sider_container {
    height: 100%;
}

.sider_menu {
    width: 6rem;
    height: 100%;
    border: none;
    background-repeat: no-repeat;
    background-image: url('../../assets/imgs/sider_bg.png');
    background-size: 100% 100%;
    padding: 12rem .1rem;

}

.sider_menu:not(.el-menu--collapse) {
    width: 22rem;
    border-right: .1rem solid #1a355c;
    background-image: none;
    background-color: #0a1225;
}
</style>