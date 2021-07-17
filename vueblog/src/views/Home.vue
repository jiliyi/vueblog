<template>
  <div>
      <Avatar :url="url"/>
      <Icon type="blog"/>
      <Pager 
      :total="pagerInfo.total"
      :limit="pagerInfo.limit"
      :visiableNumber="pagerInfo.visiableNumber"
      :current="pagerInfo.current"
       @pageChange="handlePageChange"/>
      <Concat />
      <Menu />
  </div>
</template>

<script>

export default {
    data(){
        return {
            url : 'https://img2.baidu.com/it/u=2100401123,2895311668&fm=26&fmt=auto&gp=0.jpg',
            pagerInfo : {
                limit : 10,
                visiableNumber : 10,
                total : 137,
                current : 1
            }
        }
    },
    methods:{
        handlePageChange(newPage){
            this.pagerInfo.current = newPage;
        }
    },
    components : {
        Avatar,
        Icon,
        Pager,
        Concat,
        Menu
    }
}
</script>

<style>

</style>