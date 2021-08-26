<template>
<div class="test-container">
  <Layout>
      <template #left>
          <div class="left">
              absbvjsbijvbc
          </div>
      </template>
      <template #center>
          <div class="center">
              abc在哪因河畔，我也不知道要干我也不知道要干我也不知道要干我也不知道要干我也不知道要干啥，你局扥面孔我他吗发力
          </div>
      </template>
      <template #right>
          <div class="right">
              abc
          </div>
      </template>
  </Layout>
</div>
</template>
<script>
import Layout from './'
export default {
    components :{
        Layout
    }
}
</script>

<style lang="less" scoped>
    .test-container{
        width: 60%;
        height: 300px;
        margin: auto;
        .left{
            width: 100px;
        }
        .center{
            width: 100%;
            overflow: hidden;
        }
        .right{
            width: 100px;
        }
    }
</style>