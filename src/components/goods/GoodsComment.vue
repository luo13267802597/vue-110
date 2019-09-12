<template>
  <div>
    <abc :id="$route.params.id"></abc>
  </div>
</template>


<script>
import  abc   from  '../subcomponents/comment.vue'
export default {
   components:{
     abc
   }
}
</script>


<style lang="scss" scoped>

</style>
