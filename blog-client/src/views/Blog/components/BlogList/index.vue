<template>
  <div class="bloglist-container"  ref="blogContainer" v-loading="isLoading">
    <ul class="blog-item-container">
      <li class="blog-item" v-for="item in data.rows" :key="item.id">
        <div class="thum" v-if="item.thumb">
          <img v-lazy="item.thumb" alt="" />
        </div>
        <div class="blog-text">
          <h3 class="blog-title">
            <RouterLink :to="{ path: `/blog/${item.id}` }">
              {{ item.title }}
            </RouterLink>
          </h3>
          <div class="blog-info">
            <span class="info-date">时间：{{ item.createDate }}</span>
            <span class="info-views">浏览：{{ item.scanNumber }}</span>
            <span class="info-commemt">评论：{{ item.commentNumber }}</span>
            <span class="info-category">
              <RouterLink
                :to="{
                  name: 'categoryBlog',
                  params: { categoryId: item.category.id },
                }"
              >
                分类：{{ item.category.name }}
              </RouterLink>
            </span>
          </div>
          <p class="blog-description">
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>
    <Pager
      :current="blogInfo.page"
      :total="data.total"
      :limit="blogInfo.limit"
      :visiableNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
//current 当前页码
//total 总数据量
//limit 页容量
//visiableNumber 可见页码数
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Pager from "@/components/Pager";
import mainScroll from "@/mixins/mainScroll";


export default {
  mixins: [fetchData({}),mainScroll('blogContainer')],
  methods: {
    async fetchData() {
      // return await getBlog(
      //   this.blogInfo.page,
      //   this.blogInfo.limit,
      //   this.blogInfo.categoryId
      // );

      const resp = await getBlog(
        this.blogInfo.page,
        this.blogInfo.limit,
        this.blogInfo.categoryId
      )

      if(this.blogInfo.categoryId != -1){
        //获取特定分类
        resp.rows = resp.rows.filter(it=>{
          return it.category.id === this.blogInfo.categoryId
        })
        return resp;
      }
      return resp;
    },
    handlePageChange(newPage) {
      let query = {
        page: newPage,
        limit: this.blogInfo.limit,
      };
      if (this.blogInfo.categoryId === -1) {
        //没有分类
        this.$router.push({
          name: "blog",
          query,
        });
      } else {
        //有分类
        query = {
          ...query,
          categoryId : this.blogInfo.categoryId
        }
        this.$router.push({
          name: "categoryBlog",
          params: { categoryId: this.blogInfo.categoryId },
          query,
        });
      }
    },
   handleLoadImg(){
     this.eventBus.$emit('loadimg',this.$refs.blogContainer)
   }
  },
  components: {
    Pager,
  },
  computed: {
    blogInfo() {
      let categoryId = this.$route.params.categoryId || -1; // 默认获取全部博客
      let limit = +this.$route.query.limit || 10; //默认页容量为10
      let page = +this.$route.query.page || 1;
      return {
        categoryId,
        limit,
        page,
      };
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.blogContainer.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
  mounted(){
    this.$refs.blogContainer.addEventListener('scroll',this.handleLoadImg)
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.bloglist-container {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-top: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  position: relative;
  scroll-behavior: smooth;
  .blog-item-container {
    margin: 0;
    padding: 0;
    list-style: none;
    .blog-item {
      display: flex;
      margin-right: 20px;
      padding-bottom: 1rem;
      padding-top: 1rem;
      border-bottom: 1px solid @gray;
      .thum {
        flex: 0 0 auto;
        max-width: 200px;
        img {
          width: 200px;
        }
      }
      .blog-text {
        flex: 1 1 auto;
        padding: 0 0 20px 20px;
        box-sizing: border-box;
        h3 {
          margin: 0;
          a {
            text-decoration: none;
          }
        }
        .blog-info {
          span {
            color: @gray;
            margin-right: 9px;
            font-size: 12px;
            a {
              text-decoration: none;
              color: inherit;
            }
          }
        }
        .blog-description {
          font-size: 12px;
          height: 60px;
          line-height: 20px;
          overflow: hidden;
          color: @words;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>