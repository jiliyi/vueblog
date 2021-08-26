<template>
  <img class="loading-container" :src="src" alt="">
</template>

<script>
import src from '@/assets/loading.svg';

export default {
  data(){
    return{
      src 
    }
  },
  mounted(){
    console.log('aa',this.src);
  }
}
</script>

<style lang="less" scoped>
    .loading-container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>