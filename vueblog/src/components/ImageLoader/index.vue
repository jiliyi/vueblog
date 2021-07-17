<template>
  <div class="image-loader-container">
      <img
      v-if="!everyFinished" 
      :src="placeholder" class="place" >
      <img :src="src"
      :style="{
          transition : `all ${durtion}ms ease-in-out`,
          opacity : originOpacity
      }"
       @load="handleLoad" alt="">
  </div>
</template>

<script>

export default {
    data(){
        return{
            originLoaded : false,
            everyFinished : false
        }
    },
    computed : {
        originOpacity(){
            return  this.originLoaded ? 1 : 0;
        }
    },
    props : {
        src : {
            type : String,
            require : true
        },
        placeholder : {
            type : String,
            require : true
        },
        durtion : {
            type : Number,
            default : 5000
        }
    },
    methods : {
        handleLoad(){
            this.originLoaded  = true;
            setTimeout(()=>{
                this.everyFinished = true;
            },this.durtion)
            console.log('origin loaded')
            this.$emit('load')
        }
    }
}
</script>

<style scoped lang="less">
 @import '../../styles/mixin.less';
    .image-loader-container{
        position: relative;
        width: 100%;
        height: 100%;
        img.placeholder{
            filter: 2vw;
        }
        img{
            .inner-position();
            width: 100%;
            object-fit: cover;
        }
    }
</style>