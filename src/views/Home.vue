<template>
  <div class="home">
    <el-container>
      <el-header class="top-box">
        <el-row :gutter="24">
          <el-col :span="18">
            <img class="logo" src="../assets/logo.png" />
          </el-col>
          <el-col :span="6">
            <div class="info-box">
              <span>Tina</span>
              <el-button @click="Edit" class="out-btn" type="text"
                >退出</el-button
              >
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div>
            <el-menu router="true" class="el-menu-vertical-demo">
              <el-menu-item
                :route="i.path"
                v-for="i in tabList"
                :key="i.name"
                index="i.name"
              >
                <!-- <i class="el-icon-document"></i> -->
                <template #title>{{ i.meta.title }}</template>
              </el-menu-item>
            </el-menu>
          </div>
        </el-aside>
        <el-main>
          <div class="content-box">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
    <!-- <p>{{ num }}</p>
    <button @click="addFun">+1</button>
    <p>{{ info.age }}</p>
    <button @click="addAge">长大一岁</button> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// onBeforeMount,
// // onMounted,
// // onBeforeUpdate,
// // onUpdated,
// // onBeforeUnmount,
// // onUnmounted,
// // onErrorCaptured,
// // onRenderTracked,
// // onRenderTriggered,
// ref,
// reactive,
// import { reactive } from "vue";
import router from "../router/index.js";
export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // }
  // data() {
  //   return {
  //     property: 'value',
  //   };
  // },
  setup() {
    let tabList = router.options.routes[0].children;
    // filter((v) => v.meta.isShow);
    let Edit = () => {
      router.push("/");
    };
    return {
      tabList,
      Edit,
    };

    // //Vue3内部做了静态提升，来改善渲染效率

    // //ref方法是让我们地简单类型数据变成响应式数据,ref包裹地数据，在改变地时候需要，value来获取
    // let num = ref(1);
    // //reactive方法是让我们地复杂数据类型数据变成响应式
    // let info = reactive({
    //   name: "Tina",
    //   age: 18,
    //   id: 1,
    // });
    // // onBeforeMount(() => {
    // //   console.log("onBeforeMount");
    // // });
    // // onMounted(() => {
    // //   console.log("onMounted");
    // // });
    // // onBeforeUpdate(() => {
    // //   console.log("onBeforeUpdate");
    // // });
    // // onUpdated(() => {
    // //   console.log("onUpdated");
    // // });
    // // onBeforeUnmount(() => {
    // //   console.log("onBeforeUnmount");
    // // });
    // // onUnmounted(() => {
    // //   console.log("onUnmounted");
    // // });
    // // onErrorCaptured((err) => {
    // //   console.log(err);
    // // });
    // // console.log("Setup执行了");
    // //追踪页面依赖地响应式数据
    // // onRenderTracked((obj) => {
    // //   console.log(obj);
    // // });
    // // //追踪引发页面重新渲染地响应式数据
    // // onRenderTriggered((obj) => {
    // //   console.log(obj);
    // // });
    // let addFun = () => {
    //   //Vue3 setup函数内，取消了this 它是空的
    //   // console.log(this)
    //   num.value++;
    // };
    // let addAge = () => {
    //   info.age++;
    // };

    // return {
    //   num,
    //   addFun,
    //   info,
    //   addAge,
    // };
  },
};
</script>

<style lang="scss" scoped>
.top-box {
  background: #efefef;
  padding: 5px;

  .logo {
    width: 50px;
  }

  .info-box {
    text-align: right;
  }

  .out-btn {
    margin-left: 10px;
  }
}
.content-box {
  padding: 20px;
}
</style>