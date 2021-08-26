<template>
  <div class="container">
    <div class="avatar-container">
      <template v-if="setting">
        <Avatar :size="100" :url="setting.avatar" />
        <p class="name" >{{ setting.siteTitle }}</p>
      </template>
    </div>
    <Menu />
    <div class="contact-container">
      <Contact />
    </div>
    <p class="info" v-if="setting">备案号：{{ setting.icp }}</p>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  computed: mapState("setting", ["setting"]),
  components: {
    Contact,
    Menu,
    Avatar,
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/var.less";
.container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    .name {
      font-size: 20px;
      font-weight: 300;
      color: white;
    }
  }
  .contact-container {
    width: 100%;
    height: 250px;
  }
  .info {
    color: #fff;
    text-align: center;
  }
}
</style>