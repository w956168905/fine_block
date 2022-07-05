<template>
  <div class="login">
    <div class="form" :class="{ foc: foc }" :style="{}">
      <el-form label-width="60px" :model="formData">
        <el-form-item label="用户名">
          <el-input
            v-model="formData.userId"
            @focus="focus(true)"
            @blur="focus(false)"
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="formData.passWord"
            @focus="focus(true)"
            @blur="focus(false)"
          />
        </el-form-item>
        <el-form-item label-width="0px" class="submits">
          <el-button text color="#000">注册</el-button>

          <el-button color="#626aef" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { login } from "@/http/http.js";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
// 焦点动画
let foc = ref(false);
let focus = (bol) => {
  foc.value = bol;
};

//登录逻辑
let formData = reactive({
  userId: "sgbf",
  passWord: "456ghj",
});
//登录方法
const submit = async () => {
  if (formData.userId && formData.passWord) {
    let res = await login({
      ...formData,
    });
    if (res.message == "success") {
      //登录后存储信息到缓存和vuex
      store.commit("setInfo", res.data);
      router.push({ path: "/" });
    }
  } else {
    ElMessage.error("请输入账号密码");
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  .form {
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    border-radius: 59px;
    background: #666666;
    transition: all 0.4s linear 0s;
    box-shadow: 32px 32px 40px #292929, -32px -32px 40px #a3a3a3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ::v-deep .el-form-item {
      .el-form-item__label {
        color: #fff;
      }
      .el-input {
        border: 0px;
        border-bottom: 1px solid #fff;
        width: 250px;
        .el-input__wrapper {
          background-color: transparent;
          box-shadow: unset;
          .el-input__inner {
            color: #fff;
          }
        }
      }
      &.submits {
        .el-form-item__content {
          justify-content: space-around;
        }
      }
    }
  }
  .foc {
    box-shadow: 32px 32px 0px #292929, -32px -32px 0px #a3a3a3;
  }
}
</style>
