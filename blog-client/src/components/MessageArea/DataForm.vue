<template>
  <form @submit.prevent="handleSubmit" ref="container" class="form-container">
    <div class="username">
      <input
        type="text"
        placeholder="用户昵称"
        maxlength="10"
        v-model="formData.nickname"
      />
      <span>{{ formData.nickname.length }}/10</span>
      <p class="username-err">{{ err.nickname }}</p>
    </div>
    <div class="comment">
      <textarea
        cols="30"
        rows="10"
        maxlength="300"
        v-model="formData.content"
      ></textarea>
      <p>{{ err.content }}</p>
      <button
        type="submit"
        :class="isSubmitting ? 'disabled' : ''"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? "提交中..." : "提交" }}
      </button>
    </div>
  </form>
</template>

<script>
import { showMessage } from "@/utils";
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      err: {
        nickname: "",
        content: "",
      },
      isSubmitting: false, //是否正在请求
    };
  },
  methods: {
    handleSubmit() {
      this.err.nickname = this.formData.nickname ? "" : "请输入昵称";
      this.err.content = this.formData.content ? "" : "请输入内容";
      if (this.err.nickname || this.err.content) {
        return;
      }
      this.isSubmitting = true;
      this.$emit("submit", this.formData, (msg) => {
        this.isSubmitting = false;
        this.formData.nickname = "";
        this.formData.content = "";
        this.$showMessage({
          content: msg,
          type: "success",
          container: this.$refs.container,
          durtion: 1000,
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.form-container {
  margin-left: 10px;
  .username {
    position: relative;
    input {
      outline: 0;
      border: 1px dotted @gray;
      padding: 5px 0 5px 10px;
      width: 300px;
      height: 28px;
      border-radius: 5px;
    }
    span {
      margin-left: -35px;
      color: @gray;
      font-size: 12px;
    }
    .username-err {
      height: 20px;
      line-height: 20px;
      margin: 5px;
      color: @warn;
    }
  }
  .comment {
    textarea {
      outline: 0;
      width: 600px;
      resize: none;
      border: 1px dotted @gray;
      padding: 5px 0 5px 10px;
      border-radius: 5px;
    }
    p {
      height: 20px;
      line-height: 20px;
      margin: 5px;
      color: @warn;
    }
    button {
      padding: 10px 20px;
      border: none;
      background: #008c8c;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }
    .disabled {
      background: @gray;
      color: @lightWords;
      cursor: not-allowed;
    }
  }
}
</style>