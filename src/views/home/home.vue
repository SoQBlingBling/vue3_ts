<template>
    <div>
        <a-layout>
            <a-layout-header class="header">
                <a-row type="flex" justify="space-between">
                    <a-col :span="4">ioc 占位</a-col>
                    <a-col :span="8">这是标题</a-col>
                    <a-col :span="4">
                        <div class="header_right">
                            <div>功德：99999</div>
                            <div @click="add">功德+1</div>
                            <div>退出登录</div>
                        </div>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout>
                <a-layout-sider style="padding-top:20px">
                    <mysider/>
                </a-layout-sider>
                <a-layout-content>
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script setup lang="ts">
import mysider from './components/sider.vue';
name: 'home';
components:{
    mysider
}
</script>

<style lang="scss" scoped>
:deep(.ant-layout-header) {
    background: #0D00FF !important;
}

.header {
    color: white;
    .header_right {
        display: flex;
        justify-content: space-between;

        div:nth-of-type(1) {
            cursor: default;
        }
        div:nth-of-type(2),
        div:nth-of-type(3) {
            cursor: pointer;
        }
    }
}
</style>