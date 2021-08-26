<template>
  <div>
      <Loading  v-if="show"/>
      <button @click="show = !show">show/no</button>
  </div>
</template>

<script>
let reg = /abc/
import Loading from './'
export default {
    components : {
        Loading
    },
    data(){
        return{
            show : true
        }
    }
}
</script>

<style>

</style>