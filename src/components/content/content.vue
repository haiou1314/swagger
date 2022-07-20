<template>
  <div>
    <!-- list -->
    <div class="box" @click="fn">
      <div>
        <img :src="'http://liufusong.top:8080' + houseImg" alt="" />
      </div>

      <div>
        <span
          ><span>{{ content1 }}</span></span
        >
        <br />
        <span>{{ content2 }}</span>
        <br />
        <span>{{ content3 }}</span>
        <br />
        <span>{{ content4 }}<span>元/月</span></span>
        <br />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    houseImg: {
      type: String,
      requirest: true
    },
    content1: {
      type: [String, Number],
      requirest: true
    },
    content2: {
      type: [String, Number],
      requirest: true
    },
    content3: {
      type: [String, Number],
      requirest: true
    },
    content4: {
      type: [String, Number],
      requirest: true
    }
  },
  methods: {
    fn () {
      this.$emit('fn')
    }
  }
}
</script>
<style lang="less" scoped>
.box {
  margin: 0 10px;
  border-bottom: solid rgb(226, 221, 221) 0.2px;
  height: 120px;
  display: flex;
  align-items: center;
  > div:nth-of-type(1) {
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    img {
      width: 106px;
      height: 80px;
    }
  }
  > div:nth-of-type(2) {
    margin-left: 10px;
    flex: 2;

    > span:nth-of-type(1) {
      position: relative;
      font-size: 16px;
      span {
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 10px;
        overflow: hidden;
        width: 230px;
        position: absolute;
        display: block;
      }
    }

    span:nth-of-type(2) {
      font-size: 12px;
      color: #666;
    }
    span:nth-of-type(3) {
      font-size: 12px;
      border-radius: 2px;
      padding: 2px 4px;
      background-color: rgb(168, 166, 166);
      color: #105780;
    }
    > span:nth-of-type(4) {
      font-size: 16px;
      color: red;
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
