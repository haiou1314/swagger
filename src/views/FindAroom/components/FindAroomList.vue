<template>
  <div>
    <div>
      <van-grid direction="horizontal" :column-num="1">
        <van-grid-item text="文字">
          <template #icon>
            654654
            <img src="" alt="" />
          </template>
          <template #text>
            <div class="text">
              <h5>111</h5>
              <p>dfdsa</p>
              <p>dfdsa</p>
              <p>dfdsa<span>元/月</span></p>
            </div>
          </template>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.text {
  h5 {
    margin-bottom: 5px;
    font-size: 15px;
  }
  p {
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 12px;
  }
  p:nth-of-type(1) {
    color: rgb(180, 181, 182);
    font-size: 12px;
  }
  p:nth-of-type(2) {
    font-size: 12px;
    color: #39becd;
    background: #e1f5f8;
    width: 46px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
  p:nth-of-type(3) {
    font-weight: bold;
    font-size: 16px;
    color: #fa5741;
    span{
      font-size: 12px;
    }
  }
}
</style>
