<template>
  <div class="layout-container">
      <div class="left">
          <slot name="left" />
      </div>
      <div class="center">
          <slot name="center"/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .layout-container{
        width: 100%;
        height: 100%;
        display: flex;
        .left{
            flex: 0 0 auto;
            overflow: hidden;
        }
        .center{
            flex:1 1 auto;
            white-space: nowrap;
            overflow: hidden;
        }
    }

</style>