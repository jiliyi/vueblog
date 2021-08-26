<template>
    <Layout>
        <BlogList />
        <template #right>
          <BlogCategory />
        </template>
    </Layout>
</template>

<script>
import BlogList from './components/BlogList';
import BlogCategory from './components/BlogCategory';
import Layout from '@/components/Layout';
export default {
  components : {
    BlogList,
    BlogCategory,
    Layout
  }
}
</script>

<style>

</style>