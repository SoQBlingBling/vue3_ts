<template>
  <div>
    <a-layout>
      <a-layout-header class="header">
        <a-row type="flex" justify="space-between">
          <a-col class="icon" :span="4"
            ><img :src="require('@/assets/love.jpg')" alt=""
          /></a-col>
          <a-col :span="8">
            <div class="header_right">
              功德:{{ num }}
              <div class="add" @click="addNum()">
                <img :src="require('@/assets/add.gif')" alt="" />
              </div>
              <div class="exit" @click="exit">
                <img :src="require('@/assets/exit.jpg')" alt="" />
              </div>
            </div>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout>
        <a-layout-sider style="padding-top: 20px">
          <mysider />
        </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
  <audio controls ref="audio" class="aud">
    <source :src="mp3url" />
  </audio>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import mysider from "./components/sider.vue";
import { message } from "ant-design-vue";
name: "home";
components: {
  mysider;
}
let num = ref(0);
let time = 1;
let mp3url: "";
let audio = ref();
let addNum = () => {
  if (typeof num.value == "number") {
    let intTime = setTimeout(() => {
      time++;
    }, 1000);
    let outTime = setTimeout(() => {
      clearTimeout(outTime);
      clearTimeout(intTime);
    }, 60000);
    if (time < 1 && num.value >= 50) {
      message.error("报应来喽！");
      num.value = 0;
    } else if (time < 1) {
      message.warning("点快的太快了，心是不诚的哦");
    }

    time = 0;
    num.value++;
    if (num.value == 100) {
      let music1 = new Audio(); //建立一个music1对象

      music1 = require("../../assets/good.mp3"); //通过require引入音频

      audio.value.src = music1; //此处的audio为代码ref="audio"中的audio

      audio.value.play(); //play()为播放函数
      num.value = 0;
    }
  }
};
function exit() {
  router.push({
    path: "/",
  });
}
</script>

<style lang="scss" scoped>
:deep(.ant-layout-header) {
  background: #0d00ff !important;
}

.header {
  color: white;
  overflow: hidden;
  .icon {
    img {
      height: 64px;
    }
  }
  .header_right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .add,
    .exit {
      height: 64px;
      margin-left: 10%;
      cursor: pointer;
      img {
        height: 63px;
      }
    }
  }
}
</style>