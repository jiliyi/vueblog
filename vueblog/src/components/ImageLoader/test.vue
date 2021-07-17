<template>
  <div class="test-container">
      <ImageLoader 
      @load="handImageLoaded"
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
/>
  </div>
</template>

<script>
import ImageLoader from './'
export default {
    components : {
        ImageLoader
    },
    methods : {
        handImageLoaded(){
            console.log('image loaded')
        }
    }
}
</script>

<style>
    .test-container{
        width: 400px;
        height: 400px;
    }
</style>