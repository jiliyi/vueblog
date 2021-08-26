<template>
  <div v-show="show" @click="handleClick" class="scroll-top-container">top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleClick() {
      this.eventBus.$emit('toTop',0);
    },
    handleScroll(container) {
      if (container.scrollTop > container.clientHeight) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
  created() {
    this.eventBus.$on("scroll", this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.scroll-top-container {
  position: fixed;
  z-index: 99;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: @primary;
  color: #fff;
  text-align: center;
  line-height: 50px;
  bottom: 25px;
  right: 25px;
  cursor: pointer;
}
</style>