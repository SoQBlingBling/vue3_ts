<template>
  <div class="page">
    <div class="head_box" :class="state.flag ? 'rotate_head' : ''">
      <img class="head" :src="require('@/assets/head.jpg')" alt="" />
    </div>
    <div class="info">
      {{ state.userName }}
      <div class="myInfo">
        {{ state.sign }}
      </div>
      <img class="follow" :src="require('@/assets/head_icon.jpg')" alt="">你TM点关注了吗？为什么我的 粉丝数才{{ state.fens }}个
	  <div>快给爷爬去点 <a href="https://space.bilibili.com/2989080/?spm_id_from=333.999.0.0">关注</a></div>
    </div>
  </div>
 <div id="three-container"></div>
</template>

<script>
import { reactive, SetupContext } from "vue";
import { getUserInfo, getFns } from "@/request/api";

export default {
  setup() {
    const state = reactive({
      userName: "",
      sign: "",
      photo: "",
      fens: 0,
      live: "",
      flag: true,
    });
    getUserInfo().then((res) => {
      state.userName = res.data.data.name|| '午氧氧氧';
      state.sign = res.data.data.sign|| '牛气小氧为您服务';
    //   state.photo = res.data.data.face || ``;
    });
    getFns().then((res) => {
      state.fens = res.data.data.follower;
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes rotate {
  0% {
    transform: translateX(-20%) rotate(0);
  }
  100% {
    transform: translateX(-20%) rotate(360deg);
  }
}
.page {
  text-align: center;
  height: 100vh;
  padding-top: 450px;
  background-image: url("../../../assets/1.jpg");
  background-size: 100%;
  color: white;
  .rotate_head {
    animation: rotate 3s ease 1;
  }
  .head_box {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-20%);
    img {
      height: 100%;
    }
  }
  .info {
    font-size: 36px;
  }
  .myInfo{
	font-size: 24px;
	
  }
  .follow{
	height: 80px;
  }
}
</style>