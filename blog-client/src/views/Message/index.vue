<template>
  <div class="message-container" ref="container">
    <MessageArea
      title="留言列表"
      :subTitle="`${data.total}`"
      :isLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";

import * as messageApi from "@/api/message";
export default {
  data() {
    return {
      limit: 10,
      page: 1,
      isFetching: false,
    };
  },
  mixins: [fetchData({}),mainScroll('container')],
  computed : {
      hasMore(){
          return Math.ceil( this.data.total / this.limit ) > this.page;
      }
  },
  methods: {
    async fetchData() {
      return await messageApi.fetchMessage(this.limit, this.page);
    },
    async handleSubmit(data, callback) {
      const resp = await messageApi.postMessage(data);
      callback("感谢留言");
      this.data.rows.unshift(resp);
      this.data.total++;
    },
    async fetchMore() {
      if (!this.hasMore || this.isFetching) {
        return;
      }
     
      const step = 100;
      const container = this.$refs.container;
      const distance =
        container.scrollHeight - (container.scrollTop + container.clientHeight);

      if (distance < step) {
        this.isFetching = true;
         this.page++;
        this.isLoading = true;
        const resp = await messageApi.fetchMessage(this.limit, this.page);
        this.data.rows.push(...resp.rows);
        this.isLoading = false;
        this.isFetching = false;
      }
    },
    handleScroll() {
      this.fetchMore();
    },
  },
  components: {
    MessageArea,
  },
  mounted() {
    this.$refs.container.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy(){
    this.$refs.container.removeEventListener("scroll", this.handleScroll);

  }
};
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  padding: 25px 0;
  box-sizing: border-box;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>