<template>
  <div
    class="item-container"
    ref="container"
    @mouseleave="handleLeave"
    @mousemove="handleMove"
  >
    <div ref="imgcontainer" class="img" :style="imgPosition">
      <ImageLoader
        :placeholder="carouselItem.midImg"
        :src="carouselItem.bigImg"
      />
    </div>
    <div ref="title" class="title">{{ carouselItem.title }}</div>
    <div ref="desc" class="desc">{{ carouselItem.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // 容器尺寸
      innerSize: null, //图片尺寸
      mouseX: 0,
      mouseY: 0
    };
  },
  computed: {
    imgPosition() {
      if (!this.containerSize || !this.innerSize) {
        return;
      }
      let extraWidth = this.innerSize.width - this.containerSize.width;
      let extraHeight = this.innerSize.height - this.containerSize.height;
      let curLeft = (-extraWidth / this.containerSize.width) * this.mouseX;
      let curTop = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${curLeft}px,${curTop}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  components: {
    ImageLoader,
  },
  methods: {
    showWords() {
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.clientHeight;
      this.$refs.desc.style.width = this.descWidth + "px";

      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.clientHeight;
      this.$refs.title.style.width = this.titleWidth + "px";
    },
    handleMove(e) {
      let rect = this.$refs.container.getBoundingClientRect();

      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    getSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.imgcontainer.clientWidth,
        height: this.$refs.imgcontainer.clientHeight,
      };
    },
    handleLeave(){
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }
  },
  props: ["carouselItem"],
  mounted() {
    this.height = document.documentElement.clientWidth + "px";
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.showWords();
    this.getSize();
    window.addEventListener("resize", this.getSize);

    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
  },
  destroyed() {
    window.removeEventListener("resize", this.getSize);
  },
};
</script>

<style lang="less" scoped>
.item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 120%;
    transition: 0.3s;
  }
  .title,
  .desc {
    position: absolute;
    left: 30px;
    color: #fff;
    opacity: 0;
    overflow: hidden;
    text-shadow: 1px 0 1px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.5);
  }
  .title {
    font-size: 2rem;
    top: calc(50% - 30px);
  }
  .desc {
    font-size: 1.1rem;
    top: calc(50% + 30px);
  }
}
</style>