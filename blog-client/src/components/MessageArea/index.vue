<template>
  <div class="message-area-container">
    <div class="data-form-container">
      <DataForm v-on="$listeners" />
    </div>
    <h2>{{title}} {{ `(${subTitle})` }}</h2>
    <div class="data-list-container">
      <DataList :list="list" />
    </div>
    <div class="load"  v-loading="isLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props : {
    title :{ 
      type : String,
    },
    subTitle : {
      type : String,
    },
    isLoading : {
      type : Boolean,
      default : false
    },
    list : {
      type : Array,
      default :()=>[]
    }
  },
  components: {
    DataForm,
    DataList,
  },
 
};
</script>

<style lang="less" scoped>
.message-area-container {
  width: 100%;
  .data-form-container {
    width: 100%;
  }
  .data-list-container {
    width: 100%;
  }
  .load{
    height: 100px;
    position: relative;
  }
}
</style>