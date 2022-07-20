<template>
  <div>
    <titleVue title="我的出租"></titleVue>
    <contentVue
      v-for="(item, ind) in lease"
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
import { userlease } from '@/api'
import titleVue from '@/components/title/title.vue'
import contentVue from '@/components/content/content.vue'
export default {
  data () {
    return {
      lease: []
    }
  },
  created () {
    this.userlease()
  },
  components: {
    titleVue,
    contentVue
  },
  methods: {
    async userlease () {
      try {
        const res = await userlease()
        this.lease = res.data.body
      } catch (error) {
        this.$toast.fail('请刷新重试')
      }
    }
  }
}
</script>
<style lang="less" scoped></style>
