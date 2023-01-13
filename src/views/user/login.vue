<template>
    <div class="drop_dnow"></div>
    <div class="drop_dnow"></div>
    <div class="drop_dnow"></div>
    <div class="drop_dnow"></div>
    <div class="drop_dnow"></div>
    <div class="drop_dnow"></div>
    <div class="drop_dnow"></div>
    <div class="drop_dnow"></div>

    <div class="login_box">
        <a-form class="login_form" layout="vertical" :rules="rules" :model="formState" :label-col="labelCol"
            :wrapper-col="wrapperCol">
            <a-form-item class="form_title" label="userName" name="name">
                <a-input v-model:value="formState.name" />
            </a-form-item>
            <a-form-item class="form_title" label="password" name="password">
                <a-input v-model:value="formState.password" type="textarea" />
            </a-form-item>
            <a-form-item class="button_grup">
                <a-button class="login_button" type="primary" @click="onLogin">login</a-button>
                <a-button class="regiest_button" @click="onRegiest">clear </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script  lang="ts">
import { defineComponent, reactive, toRefs, toRaw, UnwrapRef } from 'vue';
import { Moment } from 'moment';
import { message } from 'ant-design-vue';
import router from '@/router';
import { loginApi } from '../../request/api'
// 用户信息 数据类型
interface FormState {
    name: string;
    password: string;
}

export default defineComponent({
    name: 'login',
    setup() {
        // 用户登录数据
        const formState: FormState = reactive({
            name: '',
            password: ''
        });
        // 校验规则
        const rules = reactive({
            name: [{ required: true, message: '请填写用户名捏', trigger: 'blur' }],
            password: [{ required: true, message: '请填写密码捏', trigger: 'blur' }]
        });
        // 登录接口
        const onLogin = () => {
            loginApi({ username: formState.name, password: formState.password },).then((res) => {
                console.log(res.data.userInfo.username);
                sessionStorage.setItem('userName', res.data.userInfo.username)
                router.push({
                    path: '/home'
                })
            }).catch((err) => {
                console.log(err, 'error');
            })
        };

        // 清空
        const onRegiest = () => {
            formState.name = ''
            formState.password = ''
        }
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
            rules
        };
    },
})
</script>

<style lang="scss" scoped>
$imgWidth: 20px;

.drop_dnow {
    width: $imgWidth;
    height: 20px;
    background-color: wheat;
    position: absolute;
    // animation-name: dropDnow;
    animation-iteration-count: infinite;
    opacity: 0;
}

@for $i from 1 through 8 {
    .drop_dnow:nth-of-type(#{$i}) {
        left: calc(((12.5%*$i) - 20px));
        animation-duration: 5+random(4)+s;
        animation-timing-function: ease-in-out;
        animation-delay: random(4)+s;

    }
}

@keyframes dropDnow {
    0% {
        top: 0%;
        opacity: 0;

    }

    30% {
        opacity: 1;

        transform: translateX(20px) rotate(random(180)+deg);
    }

    80% {

        transform: translateX(-30px) rotate(random(180)+deg);

    }

    100% {
        top: 100%;
        transform: translateX(0px);
        opacity: 1;
        transform: translateX(-30px) rotate(random(180)+deg);

    }
}

.login_box {
    width: 100%;
    height: 100vh;
    background-color: #002FA7;
    display: flex;
    justify-content: center;
    align-items: center;

    :deep(.ant-form-item-explain-error) {
        color: white !important;
    }

    .login_form {
        width: 40%;

        :deep(.ant-form-item-label) {
            max-width: 100%;
            display: block;
        }

        .form_title {
            :deep(label) {
                color: white !important;
            }
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
                color: #002FA7;
                font-weight: 700;
                border: 1px solid black;
                box-sizing: border-box;

            }
        }
    }
}

@media screen and (max-width:800px) {
    .login_button {
        width: 70% !important;
        ;
    }

    .regiest_button {
        margin-left: 0 !important;
        width: 70% !important;
    }

    :deep(.ant-form-item-control) {
        max-width: 100%;
    }
}
</style>