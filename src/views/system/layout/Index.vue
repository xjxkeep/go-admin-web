<template>
    <div id="ebg"></div>
    <div class="common-layout">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">

</script>
<style>
.el-header {
    --el-header-padding: 0;
    --el-header-height: auto;
    height: 80px;
    background: #f3f3f3;
}
.el-main{
    background: #f3f3f3;

}

.el-container {
    height: 100%;
}

.common-layout {
    width: 99vw;
    height: 98vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: white;
    overflow: hidden;
}

#ebg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px;
    background: url("../../../assets/bg.jpeg") no-repeat;
    background-size: cover;
    background-position: center;
}
</style>