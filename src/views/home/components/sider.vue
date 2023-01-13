<template>
    <div>
        <a-menu style="width: 200px" mode="inline" theme="dark" :openKeys="openKeys" v-model:selectedKeys="selectedKeys"
            @openChange="onOpenChange">
            <a-menu-item key ='1'>
                <template #icon>
                    <MailOutlined></MailOutlined>
                </template>
                <span>个人信息</span>
            </a-menu-item>
            <a-sub-menu key="sub2">
                <template #icon></template>
                <template #title>
                    <AppstoreOutlined />
                    Navigation Two
                </template>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="7">Option 7</a-menu-item>
                    <a-menu-item key="8">Option 8</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub4">
                <template #icon>
                    <SettingOutlined />
                </template>
                <template #title>Navigation Three</template>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-menu-item key="11">Option 11</a-menu-item>
                <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    setup() {
        const state = reactive({
            rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
            openKeys: ['sub1'],
            selectedKeys: ['1'],
        });
        const onOpenChange = (openKeys: string[]) => {
            const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
            if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
                state.openKeys = openKeys;
            } else {
                state.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
        };
        return {
            ...toRefs(state),
            onOpenChange,
        };
    },
    components: {
        MailOutlined,
        AppstoreOutlined,
        SettingOutlined,
    },
});
</script>

