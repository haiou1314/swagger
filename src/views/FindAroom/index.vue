<template>
  <div>
    <!-- title -->
    <div class="title">
      <van-nav-bar left-arrow>
        <template #right>
          <van-icon name="search" size="18" color="#fff" />
        </template>
        <template #title>
          <div class="input">
            <button>
              北京<van-icon
                name="play"
                style="transform: rotate(90deg)"
                color="#000"
              />
            </button>
            <van-icon name="search" size="16" color="#fff" />
            <input type="text" placeholder="请输入小区地区或地址" />
          </div>
        </template>
      </van-nav-bar>
    </div>

    <!-- 导航 -->
    <div class="daoh">
      <van-tabs color="#fff" title-active-color="green">
        <van-tab>
          <template #title>
            <span>
              区域
              <van-icon
                name="play"
                style="transform: rotate(90deg)"
                color="#000"
              />
            </span>
          </template>
        </van-tab>
        <van-tab>
          <template #title>
            <span>
              方式
              <van-icon
                ref="text"
                name="play"
                style="transform: rotate(90deg)"
                color="#000"
              />
            </span>
          </template>
        </van-tab>
        <van-tab>
          <template #title>
            <span>
              租金
              <van-icon
                ref="text"
                name="play"
                style="transform: rotate(90deg)"
                color="#000"
              />
            </span>
          </template>
        </van-tab>
        <van-tab>
          <template #title>
            <span>
              筛选
              <van-icon
                name="play"
                style="transform: rotate(90deg)"
                color="#000"
              />
            </span>
          </template>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 内容 -->
    <div>
      <FindAroomList></FindAroomList>
    </div>
  </div>
</template>
<script>
import FindAroomList from './components/FindAroomList.vue'
import { findAroomList } from '@/api'
export default {
  components: {
    FindAroomList
  },
  created () {
    this.findAroomList()
  },
  methods: {
    async findAroomList () {
      try {
        const res = await findAroomList()
        console.log(res)
      } catch (error) {
        this.$toast.fail('请刷新一下')
      }
    }
  }
}
</script>
<style scoped lang="less">
:deep(.van-nav-bar__content) {
  color: #fff;
  background-color: green;
  .van-nav-bar__title {
    margin-left: 50px;
    z-index: 88;
    max-width: 100%;
  }
}
:deep(.van-icon-arrow-left:before) {
  color: #fff;
}

:deep(.van-ellipsis) {
  overflow: auto;
}
.input {
  margin-left: -20px;
  font-size: 12px;
  height: 34px;
  width: 295px;
  background-color: #fff;
  z-index: 3;
  top: 0;
  button {
    background: #fff;
    border: none;
    font-size: 12px;
    width: 60px;
    height: 28px;
  }
  input {
    margin-left: -10px;
    border: none;
    line-height: 30px;
    width: 150px;
  }
  input::placeholder {
    top: 0;
    position: relative;
    font-size: 12px;
  }
}
.daoh {
  :deep(.van-tab__text) {
    font-size: 16px;
  }
}
:deep(.van-tabs__wrap) {
  border-bottom: 1px solid rgb(224, 220, 220);
}
</style>
