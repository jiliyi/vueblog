<template>
  <div class="container">
      <Empty />
  </div>
</template>

<script>
import Empty from './index'
export default {
    components : {
        Empty
    }
}
</script>

<style>
    .container{
        position: relative;
        width: 400px;
        height: 400px;
        border: 1px solid black;
    }
</style>