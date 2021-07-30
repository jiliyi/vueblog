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
        height: 700px;
        width: 300px;
        background: @dark;
    }
</style>