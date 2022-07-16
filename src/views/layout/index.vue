<template>
  <div>
    <!-- 子路由出口 -->
    <router-view></router-view>
    <!-- 底部标签 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/ ">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/findaroom">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/service">咨询</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped lang="less"></style>
