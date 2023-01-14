<template>
  <div>
    <a-menu
      style="width: 200px"
      mode="inline"
      theme="dark"
      :openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @openChange="onOpenChange"
    >
      <a-menu-item key="1" @click="jump('/home/index')">
        <template #icon>
          <FormatPainterOutlined></FormatPainterOutlined>
        </template>
        <span>个人信息</span>
      </a-menu-item>
      <a-menu-item key="5"  @click="jump('/home/other')">
        <template #icon>
          <MailOutlined></MailOutlined>
        </template>

        阿巴阿巴</a-menu-item
      >
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { MailOutlined, FormatPainterOutlined } from "@ant-design/icons-vue";
import router from "@/router";
export default defineComponent({
  setup() {
    const state = reactive({
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: ["sub1"],
      selectedKeys: ["1"],
    });
    const onOpenChange = (openKeys: string[]) => {
      const latestOpenKey = openKeys.find(
        (key) => state.openKeys.indexOf(key) === -1
      );
      if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };
    function jump (e:string){
        router.push({
            path:e
        })
    }
    return {
      ...toRefs(state),
      onOpenChange,
      jump
    };
  },
  components: {
    MailOutlined,
    FormatPainterOutlined,
  },
});
</script>

