<template>
  <div class="container">
    <div class="card">
      <div class="card-column-left">
        <div class="login-form">
          <div>
            <img
              src="/@/assets/hexagon.jpg"
              style="width: 50%; margin-bottom: 20px"
            />
          </div>

          <a-form
            name="custom-validation"
            ref="formRef"
            :label-col="{ span: 6 }"
            layout="vertical"
            :model="formState"
            :rules="rules"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
          >
            <a-form-item has-feedback label="用户名" name="user">
              <a-input
                v-model:value="formState.user"
                type="text"
                autocomplete="off"
              />
            </a-form-item>
            <a-form-item has-feedback label="密码" name="pass">
              <a-input
                v-model:value="formState.pass"
                type="password"
                autocomplete="off"
              />
            </a-form-item>

            <a-form-item
              has-feedback
              label="验证码"
              name="code"
              :wrapper-col="{ span: 10 }"
            >
              <a-input
                v-model:value="formState.code"
                type="text"
                autocomplete="off"
              />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" html-type="submit">登入</a-button>
              <a-button style="margin-left: 10px" @click="resetForm"
                >重置</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </div>
      <div class="card-column-right">
        <img src="/@/assets/Division_PPM.jpg" Stretch="UniformToFill" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  RuleObject,
  ValidateErrorEntity,
} from "ant-design-vue/es/form/interface";
import { reactive, ref, UnwrapRef } from "vue";
import { useRouter } from "vue-router";
import { userInfoStore } from "/@/services/Storage/UserStore";

interface FormState {
  user: string;
  pass: string;
  code: string;
}

export default {
  setup() {
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      pass: "",
      user: "",
      code: undefined,
    });
    const router = useRouter();

    let checkCode = async (rule: RuleObject, value: string) => {
      if (!value) {
        return Promise.reject("请输入安全码");
      }
      let int_value = Number(value);
      if (!int_value || value.length != 4) {
        return Promise.reject("安全码为4位数");
      } else {
        return Promise.resolve();
      }
    };
    let validateUser = async (rule: RuleObject, value: string) => {
      if (value === "") {
        return Promise.reject("请输入用户名");
      } else if (value.length < 4) {
        return Promise.reject("用户名不能小于4个字符");
      } else {
        return Promise.resolve();
      }
    };

    let validatePass = async (rule: RuleObject, value: string) => {
      if (value === "") {
        return Promise.reject("密码不能为空");
      } else if (value.length < 8) {
        return Promise.reject("密码长度不能小于8个字符");
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      user: [{ required: true, validator: validateUser, trigger: "change" }],
      pass: [{ required: true, validator: validatePass, trigger: "change" }],
      code: [{ validator: checkCode, trigger: "change" }],
    };

    const handleFinish = (values: FormState) => {
      console.log(values, formState);
      userInfoStore.setData({
        name: formState.user,
        token: formState.pass,
        code: formState.code,
      });
      router.push({ path: "home" });
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formState,
      formRef,
      rules,
      handleFinishFailed,
      handleFinish,
      resetForm,
    };
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
}

.card {
  border-radius: 15px;
  width: 1000px;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: auto;
}

.card-column-left {
  display: flex;
  height: 100%;
  width: 50%;
  background: white;
  justify-content: center;
  align-items: center;
}

.card-column-right {
  display: flex;
  height: 100%;
  width: 50%;
}

.login-form {
  text-align: left;
  width: 55%;
}
</style>
