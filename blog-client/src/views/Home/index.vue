<template>
  <div class="home-container"
  @wheel="handleWheel" 
  ref="homeContainer">
    <div class="carousel-container" v-loading="isLoading" >
      <ul class="carousel"
      @transitionend="handleTransitionend"
      :style="{
        marginTop 
      }"
      >
        <li
        class="carousel-item"
         v-for="item in data" :key="item.id">
         <CarouselItem :carouselItem="item" />
        </li>
      </ul>
        <div
        @click="changeIndex(index - 1)" 
        class="arrow arrow-up" v-show="index>=1">
          <Icon type="arrowUp"/>
        </div>
        <div 
        @click="changeIndex(index + 1)" 
        class="arrow arrow-down" v-show="index < data.length - 1">
          <Icon type="arrowDown"
          />
        </div>
        <ul class="dots-container">
          <li :class="['dot',i === index ? 'active' : '']"
          @click="changeIndex(i)"
          v-for="(item,i) in data" :key="item.id"></li>
        </ul>
    </div>
      
  </div>
</template>

<script>

import { mapState } from 'vuex'
// import { getBanner } from '@/api/banner';
import CarouselItem from './CarouselItem.vue';
import Icon from '@/components/Icon';
// import fetchData from '@/mixins/fetchData';
export default {
  // mixins : [fetchData([])],
  data(){
    return{
      index : 0, //当前图片的索引,
      clientHeight:0,
      switching:false, // 滚动状态
    }
  },
  components : {
    CarouselItem,
    Icon,
  },
  computed:{
    ...mapState('banner',["isLoading","data"]),
    marginTop(){
      return -this.index * this.clientHeight + 'px';
    }
  },
  methods:{
    async fetchData(){
      return await getBanner()
    },
   changeIndex(i){
     if(this.index === i) return;
     this.index = i;
   },
   handleWheel(e){
     if(this.switching) return;
     if(e.deltaY > 0 && this.index < this.data.length - 1){
       this.index++;
        this.switching = true;
     }else if(e.deltaY < 0 && this.index > 0){
       this.index--;
        this.switching = true;
     }
   },
   handleTransitionend(){
     this.switching = false;
   },
   handleResize(){
     this.clientHeight =  document.documentElement.clientHeight;
   }
  },
  created(){
    this.$store.dispatch('banner/setData')
  },
  mounted(){
    
    this.clientHeight =  document.documentElement.clientHeight;
    this.handleResize();
    window.addEventListener('resize',this.handleResize)
  },
  destroyed(){
    window.removeEventListener('resize',this.handleResize)
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';
  .home-container{
    width: 100%;
    height: 100%;

    // //测试
    // width: 400px;
    // height: 300px;
    // margin: 20px auto;

    .carousel-container{
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;
      .carousel{
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all .5s ease-in-out;
        .carousel-item{
          width: 100%;
          height: 100%;
        }
      }
      .arrow{
        @step:15px;
        @keyframes jump-up {
          0%{
            transform: translateY(-@step)
          }   
          50%{
            transform: translateY(@step)
          }
          100%{
            transform: translateY(-@step)
          }
        }
        @keyframes jump-down {
          0%{
            transform: translateY(@step)
          }   
          50%{
            transform: translateY(-@step)
          }
          100%{
            transform: translateY(@step)
          }
        }
        .self-center();
        @gap:30px;
        cursor: pointer;
        transform: translateX(-50%);
        font-size: 30px;
        color: @gray;
        &.arrow-up{
          top: @gap;
          // animation: jump-up 2s ease-in-out infinite;
        }
         &.arrow-down{
          top: auto;
          bottom: @gap;
          // animation: jump-down 2s ease-in-out infinite;
        }
      }
      .dots-container{
        .self-center();
        left: auto;
        right: 30px;
        list-style: none;
        .dot{
          width: 7px;
          height: 7px;
          border: 1px solid #fff;
          background: @dark;
          border-radius: 50%;
          margin-bottom: 5px;
          background: @lightWords;
          cursor: pointer;
          &.active{
            background: rgba(172, 102, 102, 0.911);
          }
        }
      }
    }
  }
</style>