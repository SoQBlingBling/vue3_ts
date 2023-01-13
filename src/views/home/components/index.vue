<template>
    <div>
        {{state.userName }}
        {{state.sign }}
        {{state.fens }}
        <img :src="state.photo" alt="">
    </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
import { getUserInfo ,getFns} from '@/request/api'
import { string } from 'vue-types'
export default {
    setup () {
        const state = reactive({
            userName:'',
            sign:'',
            photo:'',
            fens:0,
            live:''
        })
        getUserInfo().then((res)=>{
            state.userName = res.data.data.name;
            state.sign = res.data.data.sign;
            state.photo = res.data.data.face;
            console.log(state.userName);

        })
        getFns().then((res)=>{
            state.fens = res.data.data.follower;

            
        })
        return {
            state
        }
    }
}
</script>

<style lang="scss" scoped>

</style>