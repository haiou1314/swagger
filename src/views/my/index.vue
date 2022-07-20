`/
<template>
  <div>
    <!-- header1 -->
    <div class="header" v-if="isLogin">
      <img :src="require('@/assets/img/avatar2.png')" alt="" class="img2" />
      <div class="box"></div>
      <div class="my_bg mybg">
        <van-image
          class="img"
          width="66"
          round
          height="66"
          :src="require(`@/assets/img/avatar.png`)"
        />
        <div class="tex">
          {{ !!$store.state.user.token ? userInfo.nickname : '游客' }}
        </div>
        <button class="btn" v-if="isLogin" @click="loginout">退出</button>
        <button class="btn" v-else>去登录</button>
        <p class="p">编辑个人资料<van-icon name="play" /></p>
      </div>
    </div>

    <!-- header2 -->
    <div class="header" v-else>
      <img src="../../assets/img/bg.png" alt="" />
      <div class="my_bg">
        <van-image
          class="img"
          width="66"
          round
          height="66"
          :src="require('@/assets/img/avatar.png')"
        />
        <div>游客</div>
        <button class="btn" @click="loginFn">去登录</button>
      </div>
    </div>

    <!-- section -->
    <div class="section">
      <van-grid :column-num="3" :border="false" clickable router>
        <van-grid-item icon="star-o" text="我的收藏" to="/detailsList" />
        <van-grid-item icon="wap-home-o" text="我的出租" to="/userLease" />
        <van-grid-item icon="underway-o" text="看房记录" />
        <van-grid-item icon="ecard-pay" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>

    <!-- footer -->
    <div class="footer">
      <img :src="require('@/assets/img/join.png')" alt="" />
    </div>
  </div>
</template>
<script>
import { userinfo } from '@/api/user'
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.userinfo()
  },
  methods: {
    loginFn () {
      this.$router.push('/login')
    },
    loginout () {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确认退出？',
          confirmButtonColor: '#108ee9'
        })
        .then(() => {
          this.$store.commit('setUser', {})
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    },
    async userinfo () {
      try {
        if (this.isLogin) {
          const {
            data: { body }
          } = await userinfo()
          this.userInfo = body
        }
      } catch (error) {
        this.$toast.fail('请刷新重试')
      }
    }
  },
  computed: {
    isLogin () {
      return !!this.$store.state.user.token
    }
  }
}
</script>
<style scoped lang="less">
.p {
  cursor: pointer;
  color: rgb(92, 88, 88);
  width: 100%;
  font-size: 12px;
  text-align: center;
  bottom: 0;
  position: absolute;
}
.box {
  bottom: -100px;
  position: absolute;
  width: 375px;
  background-color: white;
  height: 100px;
}
.header {
  position: relative;
  height: 300px;
  width: 375px;
  img {
    width: 375px;
  }
  .my_bg {
    position: relative;
    box-shadow: 0 0 10px rgb(206, 206, 203);
    bottom: 5px;
    left: 30px;
    position: absolute;
    height: 165px;
    width: 318px;
    background-color: rgb(252, 249, 249);
    .img {
      left: 50%;
      margin-left: -33px;
      top: -33px;
      border: 4px solid rgb(235, 231, 231);
    }
    div {
      margin-top: -10px;
      font-size: 13px;
      text-align: center;
    }
    .btn {
      font-size: 12px;
      width: 70px;
      height: 30px;
      position: absolute;
      bottom: 40px;
      left: 50%;
      margin-left: -35px;
      background-color: #21b97a;
      border: none;
      color: white;
      border-radius: 5px;
    }
  }
  .mybg {
    z-index: 2;
    bottom: 0;
  }
}
.section {
  :deep(.van-grid-item__icon) {
    font-size: 23px;
  }
  :deep(.van-grid-item__text) {
    font-size: 13px;
    color: #000;
  }
}
.footer {
  padding: 15px 15px 0;
  box-sizing: border-box;
  img {
    width: 100%;
  }
}
</style>
