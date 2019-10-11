<template>
  <div>
     <h4>留言反馈</h4>
     <comment-box></comment-box>
  </div>
</template>


<script>

import lzq from '../subcomponents/comment.vue'
export default {
  data(){

  },
  components:{//注册子组件
      "comment-box" : lzq
  }
}
</script>


<style lang="scss" scoped>

</style>
