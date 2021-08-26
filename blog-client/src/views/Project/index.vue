<template>
  <div class="project-container" ref="container" v-loading="isLoading">
    <ul class="container" v-if="data">
      <li class="item" v-for="item in data" :key="item.key">
        <div class="thumb">
          <a href="">
            <img v-lazy="item.thumb" alt="" />
          </a>
        </div>
        <div class="desc">
          <h3 class="name">
            <a href="">
              {{ item.name }}
            </a>
          </h3>
          <p class="desc-item" v-for="it in item.description" :key="it">
            {{ it }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import mainScroll from '@/mixins/mainScroll';
import { mapState } from "vuex";

import eventBus from '@/eventBus'

export default {
    mixins :[mainScroll("container")],
  computed: mapState("project", ["isLoading", "data"]),
  methods : {
      handleLoadImg(){
          eventBus.$emit('loadimg')
      }
  },
  created() {
    this.$store.dispatch("project/setData");
  },
  mounted(){
      this.$refs.container.addEventListener('scroll',this.handleLoadImg);
  },
  beforeDestroy(){
      this.$refs.container.removeEventListener('scroll',this.handleLoadImg);
  }
};
</script>

<style lang="less" scoped>
.project-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: scroll;
  box-sizing: border-box;
  scroll-behavior: smooth;
  .container {
    width: 100%;
    height: 100%;
    list-style: none;
    .item {
      display: flex;
      padding: 10px;
      box-sizing: border-box;
      margin: 10px;
      border-radius: 4px;
       border: 1px solid transparent;
      &:hover {
        border: 1px solid #008c8c;
        box-shadow: 1px 1px 1px, -1px 1px 1px, -1px -1px 1px;
      }
      .thumb {
        width: 200px;
        height: 100%;
        a {
          width: 200px;
          height: 100%;
          display: inline-block;
          img {
            width: 100%;
            border-radius: 4px;
          }
        }
      }
      .desc {
        margin-left: 10px;

        .name {
          margin-top: 0;
          a {
            text-decoration: none;
          }
        }
        .desc-item {
          margin: 0;
          line-height: 25px;
        }
      }
    }
  }
}
</style>