<template>
  <div>
    <!-- title -->
    <div>
      <van-nav-bar
        :title="title ? title : '房屋管理'"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      requirest: true
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>
<style lang="less" scoped>
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
  .van-icon {
    color: #fff;
  }
  .van-nav-bar__title {
    color: #fff;
    font-size: 20px;
  }
}
</style>
