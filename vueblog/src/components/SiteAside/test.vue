<template>
  <div class="test-container">
      <SiteAside />
  </div>
</template>

<script>
import SiteAside from './'
export default {
    components : {
        SiteAside
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/var.less';
    .test-container{
         padding-top: 10px;
        height: 100%;
        width: 30%;
        background: @dark;
    }
</style>