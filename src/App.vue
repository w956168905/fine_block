<template>
  <div class="view">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  name: "app",
  setup() {
    // 初始化vuex中用户信息
    const store = useStore();
    const info = JSON.parse(localStorage.getItem("INFO"));
    if (info) {
      store.commit("setInfo", info);
    }
  },
};
</script>
<style lang="scss" scoped>
.view {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
