<template>
  <div class="home">
      <Layout>
        <template #left>
            <div class="left">
                <SiteAside />
            </div>
        </template>
        <template #center>
               <div class="center">
                   <RouterView />
                </div> 
        </template>
      </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import SiteAside from '@/components/SiteAside';
export default {
    data(){
        return {
           
        }
    },
    methods:{
      
    },
    components : {
        Layout,
        SiteAside
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
    .home{
        width: 100%;
        height: 100%;
        .left{
            width: 300px;
            height: 100%;
            background: @dark;
        }
        .center{
            width: 100%;
            height: 100%;
        }
    }
</style>