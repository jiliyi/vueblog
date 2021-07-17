<template>
  <div class="pager">
      <a
      @click="handleClick(1)" 
      class="first-btn">|&lt;&lt;</a>
      <a
      @click="handleClick(current - 1)"
       class="prev-btn">&lt;&lt;</a>
      <a
      @click="handleClick(item)" 
      :class="item === current ? 'active': ''"
      v-for="(item) in btnArr" :key="item">
          {{ item }}
      </a>
      <a
      @click="handleClick(current + 1)" 
      class="next-btn">&gt;&gt;</a>
      <a @click="handleClick(this.pagerNumber)" class="last-btn">&gt;&gt;|</a>
  </div>
</template>

<script>
//current 当前页码
//total 总数据量
//limit 页容量
//visiableNumber 可见页码数
 
export default {
    computed : {
        btnArr(){
           let half =  Math.ceil( this.visiableNumber / 2 );
          let firstNum = this.current - half  > 0 ? this.current - half : 1;
          let lastNum = firstNum + half * 2  - 1 > 
          Math.ceil( this.total / this.limit) ? 
          Math.ceil(this.total / this.limit) :
          firstNum + half * 2 - 1;
          let arr = [];
          for(let i = firstNum;i<= lastNum;i++){
              arr.push(i)
          }
          return arr;
        },
         pagerNumber(){
            return Math.ceil(this.total / this.limit)
        }
    },
    methods : {
        handleClick(newPage){
            if(newPage < 1) newPage = 1;
            if(newPage >this.pagerNumber) newPage = this.pagerNumber; 
            this.$emit('pageChange',newPage)
        }
    },
    props : {
        total:{
            type : Number,
            require : true,
            default : 0
        },
        current:{
            type : Number,
            require : true,
            default : 1
        },
        limit:{
            type : Number,
            require : true,
            default : 10

        },
        visiableNumber:{
            type : Number,
            require : true,
            default : 10
        }
        },

}
</script>

<style scoped>
    .pager{
        display: flex;
        justify-content: center;
    }
    a{
        width: 30px;
        height: 30px;
        color: #337ab7;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        border: 1px solid #ddd;;
    }
    a.active{
        background: #337ab7;
        color: white;
    }
    a:hover{
        background: #eee;
    }
</style>