<template>
  <div class="test-container">
      <Contact />
  </div>
</template>

<script>
import Contact from './'
export default {
  components: { Contact },

}
</script>

<style lang="less" scoped>
@import '../../styles/var.less';
    .test-container{
        width: 400px;
        background: @dark;
        padding: 10px;
        border-radius: 10px;
    }
</style>