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
        :rules="userRuler"
        class="input"
      />
      <van-field
        v-model="code"
        type="password"
        name="code"
        placeholder="请输入密码"
        :rules="pwdRuler"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
      <div class="text">还没有账号，去注册~</div>
    </van-form>
  </div>
</template>
<script>
import { login } from '@/api/user.js'
import { userRuler, pwdRuler } from './ruler'

export default {
  data () {
    return {
      mobile: '',
      code: '',
      userRuler,
      pwdRuler
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    async onSubmit () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const res = await login(this.mobile, this.code)
        const status = res.data.status
        if (status === 200) {
          // 说明登录成功
          this.$toast.success(res.data.description)
          this.$store.commit('setUser', res.data.body)
          this.$router.push('/profil')
        }
        this.$toast.success(res.data.description)
      } catch (error) {
        this.$toast.fail('登录失败')
        console.log(error)
      }
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
