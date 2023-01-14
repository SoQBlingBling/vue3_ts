<template>
  <div class="drop_dnow">
    <img :src="require('@/assets/small.png')" alt="">
  </div>
  <div class="drop_dnow">
    <img :src="require('@/assets/small.png')" alt="">
  </div>
  <div class="drop_dnow">
    <img :src="require('@/assets/small.png')" alt="">
  </div>
  <div class="drop_dnow">
    <img :src="require('@/assets/small.png')" alt="">
  </div>
  <div class="drop_dnow">
    <img :src="require('@/assets/small.png')" alt="">
  </div>
  <div class="drop_dnow">
    <img :src="require('@/assets/small.png')" alt="">
  </div>
  <div class="drop_dnow">
    <img :src="require('@/assets/small.png')" alt="">
  </div>
  <div class="drop_dnow">
    <img :src="require('@/assets/small.png')" alt="">
  </div>
  <div class="page">
    <div class="login_box">
      <a-form
        class="login_form"
        layout="vertical"
        :rules="rules"
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item class="form_title" label="userName" name="name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item class="form_title" label="password" name="password">
          <a-input v-model:value="formState.password" type="textarea" />
        </a-form-item>
        <a-form-item class="button_grup">
          <a-button class="login_button" type="primary" @click="onLogin"
            >login</a-button
          >
          <a-button class="regiest_button" @click="onRegiest">clear </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
  <img class="item" :src="require('@/assets/wallhaven-k776l1.png')" alt="" />
</template>

<script  lang="ts">
import { defineComponent, reactive, toRefs, toRaw, UnwrapRef } from "vue";
import { Moment } from "moment";
import { message } from "ant-design-vue";
import router from "@/router";
import { loginApi } from "../../request/api";
// 用户信息 数据类型
interface FormState {
  name: string;
  password: string;
}

export default defineComponent({
  name: "login",
  setup() {
    // 用户登录数据
    const formState: FormState = reactive({
      name: "",
      password: "",
    });
    // 校验规则
    const rules = reactive({
      name: [{ required: true, message: "请填写用户名捏", trigger: "blur" }],
      password: [{ required: true, message: "请填写密码捏", trigger: "blur" }],
    });
    // 登录接口
    const onLogin = () => {
      loginApi({ username: formState.name, password: formState.password })
        .then((res) => {
          console.log(res.data.userInfo.username);
          sessionStorage.setItem("userName", res.data.userInfo.username);
          router.push({
            path: "/home",
          });
        })
        .catch((err) => {
          console.log(err, "error");
        });
    };

    // 清空
    const onRegiest = () => {
      formState.name = "";
      formState.password = "";
    };
    return {
      // 布局格式
      labelCol: { span: 4, offset: 4 },
      // 布局格式
      wrapperCol: { span: 16, offset: 4 },
      // 用户登录数据
      formState,
      // 登录方法
      onLogin,
      // 清空方法
      onRegiest,
      // 校验规则
      rules,
    };
  },
});
</script>

<style lang="scss" scoped>
$imgWidth: 60px;

.drop_dnow {
  border-radius: 50%;
  background-color: wheat;
  position: absolute;
  animation-name: dropDnow;
  animation-iteration-count: infinite;
  opacity: 0;
  z-index: 1;
  img{
      width: $imgWidth;
  height: 60px;
  border-radius: 50%;
  }
}

@for $i from 1 through 8 {
  .drop_dnow:nth-of-type(#{$i}) {
    left: calc(((12.5% * $i) - 20px));
    animation-duration: 5 + random(4) + s;
    animation-timing-function: ease-in-out;
    animation-delay: random(4) + s;
  }
}

@keyframes dropDnow {
  0% {
    top: 0%;
    opacity: 0;
  }

  30% {
    opacity: 1;
    transform: translateX(-30px) rotate(random(180) + deg);

    transform: translateX(20px) ;
  }

  80% {
    transform: translateX(-30px) ;
  }

  100% {
    top: 100%;
    transform: translateX(0px);
    opacity: 1;
    transform: translateX(-30px) rotate(0deg);
  }
}
.page {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/login_bg.jpg");
  .login_box {
    width: 40%;
    padding: 60px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #fff, $alpha: 0.8);

    .login_form {
      width: 90%;

      :deep(.ant-form-item-label) {
        max-width: 100%;
        display: block;
      }


      .button_grup {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .login_button {
          width: 130px;
          height: 45px;
          background-color: black;
          font-weight: 700;
          border: none;
          margin-top: 20px;
        }

        .regiest_button {
          margin-left: 20px;
          margin-top: 20px;
          width: 130px;
          height: 45px;
          color: #002fa7;
          font-weight: 700;
          border: 1px solid black;
          box-sizing: border-box;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .login_button {
    width: 70% !important;
  }

  .regiest_button {
    margin-left: 0 !important;
    width: 70% !important;
  }


}
.item{
    position:absolute;
    bottom: 0;
    right: 0;
    width: 30%;
}
</style>