<template>
  <div>
    <titleVue title="我的收藏"></titleVue>
    <contentVue
      @fn="toDetails"
      v-for="(item, ind) in collection"
      :key="ind"
      :imgage="'http://liufusong.top:8080' + item.houseImg"
      :content1="item.title"
      :content2="item.desc"
      :content3="item.tags[0]"
      :content4="item.price"
    ></contentVue>
  </div>
</template>
<script>
import { userCollection } from '@/api'
import titleVue from '@/components/title/title.vue'
import contentVue from '@/components/content/content.vue'
export default {
  data () {
    return {
      collection: []
    }
  },
  created () {
    this.userCollection()
  },
  components: {
    titleVue,
    contentVue
  },
  methods: {
    async userCollection () {
      try {
        const { data } = await userCollection()
        this.collection = data.body
        console.log(this.collection)
      } catch (error) {
        this.$toast.fail('请刷新重试')
      }
    },
    toDetails () {
      console.log(444444444444)
    }
  }
}
</script>
<style lang="less" scoped></style>
