<template>
  <Layout>
    <div class="blog-detail-container" ref="container" v-loading="isLoading">
      <BlogDetail :blog="data ? data : {}" />
      <BlogComment  v-if="!isLoading" />
    </div>
    <template #right>
      <div class="blog-toc-container">
        <BlogToc :toc="data ? data.toc : []" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogComment from "./components/BlogComment";
import BlogToc from "./components/BlogToc";
import fetchData from "@/mixins/fetchData";
import { getSingleBlog } from "@/api/blog";
import mainScroll from "@/mixins/mainScroll";
export default {
  mixins: [fetchData(null), mainScroll("container")],
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment,
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  methods: {
    async fetchData() {
      //获取单篇博客
      return await getSingleBlog(this.$route.params.blogid);
    },
  },
};
</script>

<style lang="less" scoped>
.blog-detail-container {
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.blog-toc-container {
  width: 300px;
  height: 100%;
  overflow: hidden;
}
</style>