<template>
  <div class="about-container" v-loading="isLoading">
    <iframe v-if="data" :src="data.url" frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed : mapState('about',['isLoading','data']),
  created(){
    this.$store.dispatch('about/setData')
  },
}
</script>

<style lang="less" scoped>
  .about-container{
    position: relative;
    width: 100%;
    height: 100%;
  }
  iframe{
    width: 100%;
    height: 100%;
  }
</style>