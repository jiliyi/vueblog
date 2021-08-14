<template>
  <div class="list-container">
    <ul class="container">
      <li v-for="item in list" :key="item.id">
        <div class="avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="comment">
          <span class="username">{{ item.nickname }}</span>
          <p>{{ item.content }}</p>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  props : {
    list : {
      type : Array
    }
  }

}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
  .list-container{
    width: 100%;
    .container{
      width: 100%;
      list-style: none;
      position: relative;
      li{
        display: flex;
        border-bottom: 1px solid #ccc;
        padding-top: 10px;
        .avatar{
          width: 40px;
          height: 40px;
          margin-right: 10px;
          img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
        .comment{
          .username{
            color: #9BC331;
          }
          p{
            font-size: 14px;
            margin: 0;
            line-height: 30px;
            font-size: 13px;
            color: @words;
          }
        }
      }
    }
    
  }
</style>