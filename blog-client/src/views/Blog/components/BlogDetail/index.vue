<template>
  <div class="blog-container" v-if="blog.id">
    <h2>{{ blog.title }}</h2>
    <div class="aside">
      <span>浏览量：{{ blog.scanNumber }}</span>
      <span> <a href="#blogcomment">评论</a> ：{{ blog.commentNumber }}</span>
      <span>创建时间：{{ formatDate(blog.createDate) }}</span>
      <span
        >分类：
        <RouterLink
          :to="{ name: 'categoryBlog', params: { categoryId: blog.id } }"
          >{{ blog.id }}
        </RouterLink></span
      >
    </div>
    <div v-html="blog.htmlContent" class="markdown-body main-container"></div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
import formatDate from "@/utils/formatDate";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatDate,
    async handleSubmit(comment) {
      return await postComment(comment);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/markdown.css";
@import "~@/styles/var.less";

h2 {
  text-align: center;
}
.aside {
  text-align: center;
  font-size: 14px;
  color: @gray;
  margin-bottom: 30px;
  span {
    margin-right: 1em;
    a {
      // text-decoration: none;
      color: @danger;
      
    }
  }
}
</style>