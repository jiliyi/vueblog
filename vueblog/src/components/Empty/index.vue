<template>
  <div class="inner">
      <Icon type="empty"/>
      <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../Icon'
export default {
    components : {
        Icon
    },
    props : {
        text : {
            type : String,
            default : '无数据'
        }
    }
}
</script>

<style lang="less" scopd>
@import "../../styles/mixin.less";
@import "../../styles/var.less";
  .inner{
      .self-center();
      text-align: center;
      color : @gray;
  }
  .iconfont{
      font-size: 72px;
  }
</style>