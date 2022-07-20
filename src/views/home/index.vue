<template>
  <div>
    <div class="main">
      <!-- 轮播 -->
      <div class="banner">
        <div class="input">
          <button>
            北京<van-icon name="play" style="transform: rotate(90deg)" />
          </button>
          <van-icon name="search" size="16" />
          <input type="text" placeholder="请输入小区地区或地址" />
        </div>
        <div class="dit"><van-icon name="guide-o" /></div>
        <van-swipe
          class="my-swipe"
          :autoplay="3000"
          indicator-color="white"
          duration="500"
        >
          <van-swipe-item v-for="item in banner" :key="item.id">
            <img :src="imgurl + item.imgSrc" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 图标 -->
      <div class="tb">
        <van-grid size="30">
          <van-grid-item text="整租">
            <template #icon>
              <div class="yuan">
                <van-icon name="wap-home-o" />
              </div>
            </template>
          </van-grid-item>

          <van-grid-item text="合租">
            <template #icon>
              <div class="yuan">
                <van-icon name="friends-o" />
              </div>
            </template>
          </van-grid-item>

          <van-grid-item text="地图找房">
            <template #icon>
              <div class="yuan">
                <van-icon name="location-o" />
              </div>
            </template>
          </van-grid-item>

          <van-grid-item text="去出租">
            <template #icon>
              <div class="yuan">
                <van-icon name="shop-collect-o" />
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
      <!-- 标题 -->
      <div>
        <van-cell-group :border="false">
          <van-cell title="租房小组" value="更多" />
        </van-cell-group>
      </div>
      <!-- list -->
      <div class="list">
        <van-grid direction="horizontal" :column-num="2" :gutter="10">
          <van-grid-item v-for="item in groups" :key="item.id">
            <template #icon>
              <img :src="imgurl + item.imgSrc" alt="" />
            </template>
            <template #text>
              <div class="text">
                {{ item.title }}
                <br />
                {{ item.desc }}
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
import { homeImg, homegroups } from '@/api'
export default {
  data () {
    return {
      banner: [],
      groups: [],
      imgurl: 'http://liufusong.top:8080'
    }
  },
  created () {
    this.homeimg()
    this.homegroups()
  },
  methods: {
    async homeimg () {
      try {
        const {
          data: { body }
        } = await homeImg()
        this.banner = body
      } catch (error) {
        this.$toast.fail('请刷新一下')
      }
    },
    async homegroups () {
      try {
        const {
          data: { body }
        } = await homegroups()
        this.groups = body
      } catch (error) {
        this.$toast.fail('请刷新一下')
      }
    }
  }
}
</script>
<style scoped lang="less">
.main {
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #f6f5f6;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.banner {
  position: relative;
  img {
    height: 212px;
  }
  .van-swipe-item {
    height: 212px;
  }
  .input {
    font-size: 12px;
    margin-top: 20px;
    margin-left: 12.5px;
    height: 34px;
    width: 320px;
    background-color: #fff;
    z-index: 3;
    top: 0;
    position: absolute;
    button {
      background: #fff;
      border: none;
      font-size: 12px;
      width: 60px;
      height: 28px;
    }
    input {
      margin-left: 5px;
      border: none;
      line-height: 30px;
      width: 200px;
    }
    input::placeholder {
      top: 0;
      position: relative;
      font-size: 12px;
    }
  }
  .dit {
    color: #fff;
    margin-top: 24px;
    z-index: 3;
    position: absolute;
    right: 15px;
  }
}
.tb {
  .yuan {
    margin-bottom: 10px;
    font-size: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
    background-color: #f2fbf7;
    width: 60px;
    height: 60px;
    color: #21b97a;
  }
  :deep(.van-grid-item__text) {
    font-size: 14px;
  }
  :deep(.van-grid-item__content::after) {
    border: none;
  }
}
:deep(.van-cell) {
  background-color: #f6f5f6;
}
.list {
  background-color: #f6f5f6;
  :deep(.van-grid-item) {
    background-color: #f6f5f6;
  }
  img {
    width: 40px;
  }
  .text {
    font-size: 14px;
    margin-left: 10px;
  }
}
</style>
