<template>
  <div>
    <!-- title -->
    <van-nav-bar
      class="navBar"
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- section -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="mobile"
        name="mobile"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
        class="input"
      />
      <van-field
        v-model="code"
        type="password"
        name="code"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
      <div class="text">还没有账号，去注册~</div>
    </van-form>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { login } from '@/api/user.js'

export default {
  data () {
    return {
      mobile: '',
      code: ''
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onSubmit () {
      login(this.mobile, this.code)
    }
  }
}
</script>
<style lang="less" scoped>
.navBar {
  background-color: #21b97a;
  :deep(.van-icon-arrow-left:before) {
    color: white !important;
  }
  :deep(.van-nav-bar__title) {
    color: white;
  }
  .input {
    border-bottom: #666;
  }
}
.van-button--info {
  background-color: #21b97a;
}
.text {
  text-align: center;
  margin-top: 50px;
  font-size: 25px;
  color: #666;
}
</style>
