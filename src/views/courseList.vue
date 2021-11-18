<template>
  <div class="select-box">
    <div>
      <span>id:</span>
      <el-select v-model="option.id" placeholder="请选择ID">
        <el-option
          v-for="item in [1, 2, 3, 4, 5, 6, 7]"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </div>
    <div>
      <span>标题:</span>
      <el-input v-model="option.title" placeholder="请输入标题"></el-input>
    </div>
    <div>
      <!-- 一般的查询是在后端查询再把数据传输到前端俩进行数据显示，所以在这里是没有进行查询的功能编写
         但其实，查询功能的使用，其实就是把用户选择的或输入的进行数据过滤，把过滤出来的数据进行返回出来，在前端从url获取数据进行显示，也可以在前端进行缓存处理，然后然用户数据和选择在缓存中进行筛选，然而缓存需要设置过期时间
       -->
      <el-button @click="getTableList" type="primary">查询</el-button>
    </div>
  </div>
  <el-table border :data="data.table[option.page]" style="width: 100%">
    <el-table-column prop="title" label="标题"> </el-table-column>
    <el-table-column prop="body" label="内容"> </el-table-column>
    <el-table-column prop="id" label="id"> </el-table-column>
  </el-table>
  <el-pagination
    @current-change="handleCurrentChange"
    :current-page="data.page"
    layout="total,  prev, ,pager, next, jumper"
    :total="data.total"
  >
  </el-pagination>
</template>
<script>
import { reactive } from "vue";
import { getCourseList } from "../http/api";
export default {
  name: "CourseList",
  setup() {
    let data = reactive({
      table: [],
      psages: 0,
      total: 0,
    });

    let option = reactive({
      id: "",
      title: "",
      page: 0,
    });

    let getCourseListFun = async (obj) => {
      //   data.table = await getCourseList(obj);
      let arr = await getCourseList(obj),
        newArr = [];
      data.total = arr.length;
      for (let index = 0; index < arr.length; index++) {
        newArr.push(arr.splice(index, 10));
        index += 10;
      }
      data.table = newArr;
    };
    getCourseListFun();

    let handleCurrentChange = (index) => {
      option.page = index;
      //getCourseListFun(page:data.page)
    };
    let getTableList = () => {
      console.log(option);
    };
    return {
      data,
      handleCurrentChange,
      option,
      getTableList,
    };
  },
};
</script>
<style lang="scss" scoped>
.select-box {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  > div {
    margin-right: 10px;
    width: 30%;
    display: flex;
    align-items: center;
    span {
      width: 50px;
    }
  }
}
</style>