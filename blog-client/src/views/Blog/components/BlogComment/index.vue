<template>
  <div class="blog-comment-container" id="blogcomment" ref="container">
    <MessageArea
      title="评论列表"
      :subTitle="`${data.total}`"
      :isLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import {  getComment,postComment } from "@/api/blog";
export default {
  data(){
    return {
      page : 1,
      limit : 10
    }
  },
  mixins: [fetchData({})],
  components: {
    MessageArea,
  },
  computed : {
    hasMore(){
      return this.data.total > this.data.rows.length;
    }
  },
  methods: {
    async fetchData() {
      return await getComment(this.$route.params.id,this.page,this.limit);
    },
    async fetchMore(){ //加载下一页数据
    if(!this.hasMore) return;
      this.isLoading = true
      this.page++;
      let nextPageData = await getComment(this.$route.params.id,this.page,this.limit);
      this.data.rows = [...this.data.rows,...nextPageData.rows] ;
      this.isLoading = false;
    },
    async handleSubmit(formData,callback){
      const resp =  await postComment(formData);
      this.data.rows.unshift(resp)
      this.data.total++;
      callback('评论成功');
    },
    handleScroll(box){
      const range = 100;
      const dif = Math.abs( box.scrollTop + box.clientHeight - box.scrollHeight );
      if(dif <= range){
        if(this.isLoading){//正在加载
          return;
        }
        this.fetchMore()
      }
    }
  },
  created(){ 
   this.eventBus.$on('scroll',this.handleScroll)
  }
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  width: 100%;
  height: 300px;
  margin-top: 100px;
  padding: 0 10px;
}
</style>