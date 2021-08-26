<template>
  <div class="right-list-container" v-loading="isLoading">
    <h4>文章分类</h4>
    <RightList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from '../RightList';
import fetchData from '@/mixins/fetchData';
import { getBlogCategories } from '@/api/blog'
export default {
  components : {
    RightList
  },
  computed :{
    limit(){
      return +this.$route.query.limit || 10;
    },
    categoryId(){
      return +this.$route.params.categoryId || -1
    },
    list(){
      let articleCount = this.data.reduce((a,b)=>a+b.articleCount,0)
      let result = [{name : '全部',id:-1,articleCount},...this.data];
      return result.map(it=>{
        return {
          ...it,
          isSelected : it.id == this.categoryId,
          aside : `${it.articleCount}篇`
        }
      })
    }
  },
  mixins : [fetchData([])],
  methods : {
    async fetchData(){
      return await getBlogCategories()
    },
    handleSelect(item){
      let query = {
        limit : this.limit,
        page : 1
      }
      if(item.id === -1){
        //全部分类
        this.$router.push({
          name : 'blog',
          query
        })
      }else{
        //单独分类
        this.$router.push({
          name : 'categoryBlog',
          query,
          params : {
            categoryId : item.id
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.right-list-container{
  position: relative;
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
  h4{
    margin: 0;
    letter-spacing: 2px;
  }
}
</style>