<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="withSelectToc" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "../RightList";
import { debounce } from '@/utils';
export default {
  data() {
    return {
      activeAnchor: "",
    };
  },
  props: {
    toc: {
      required: true,
      default: () => [],
    },
  },
  components: {
    RightList,
  },
  computed: {
    withSelectToc() {
      //返回带有选中状态toc数组
      let getToc = (toc = []) => {
        return toc.map((it) => {
          return {
            ...it,
            isSelected: it.anchor === this.activeAnchor,
            children: getToc(it.children),
          };
        });
      };
      return getToc(this.toc);
    },
    doms() {
      let doms = [];
      let getDoms = (toc) => {
        for (const it of toc) {
          const dom = document.getElementById(it.anchor);
          doms.push(dom);
          if (it.children) {
            getDoms(it.children);
          }
        }
      };
      getDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelect() {
      //设置选中状态
      this.activeAnchor = "";
      const range = 200;
      for (const dom of this.doms) {
        const top = dom.getBoundingClientRect().top; //获取距离浏览器顶部距离
        if (top > -1 && top < range) {
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created() {
    this.setDebounceSelect = debounce(this.setSelect,50);
    this.eventBus.$on("scroll", this.setDebounceSelect);
  },
  beforeDestroy(){
    this.eventBus.$off("scroll", this.setDebounceSelect);
  }
};
</script>
<style lang="less" scoped>
.blog-toc-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
}
</style>