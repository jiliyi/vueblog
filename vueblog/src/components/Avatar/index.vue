<template>
  <img :src="url"
  :style="{
      width : size + 'px',
      height : size + 'px'
  }"
  >
</template>

<script>
export default {
    props : {
        url : {
            type : String
        },
        size : {
            type : Number,
            default : 50
        }
    }
}
</script>

<style scoped>
    img{
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }
</style>