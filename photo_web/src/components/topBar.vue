/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="TOP">
    <div id = "element">

    <el-row>
      <el-col :span="2"> </el-col>
      <el-col :span="3">
        <el-image
         :src="url"
        style="width: 31%; height: auto;"
        ></el-image>
      </el-col>

      <el-col :span="4">
        <el-link href="#" target="" style="color: white; font-size: 1.5vw"
          >哈法留学万事屋</el-link>
      </el-col>

      <el-col :span="8">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="搜索"
          style="width: 100%; margin: auto 0"
          @select="handleSelect"
        />
      </el-col>

      <el-col :span="4">
        <el-button type="text" class="fb">
          <el-link href="/Submit" style="font-size: 1vw; margin-left: 145px; color: yellow;"> 发布</el-link></el-button
        >
      </el-col>
      <el-col :span="2"> </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
//https://blog.csdn.net/ZMM_Devil/article/details/103871602
import { ref } from "vue";
export default {
  data() {
    return {
      fits: "contain",
      url: "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
      herf: "#",
      state: "",
    };
  },
  setup: function () {
    const nav_box = ref(null);
    const getDom = () => {
      nav_box.value.style = "padding:1.5ch 2ch";
    };
    return { nav_box, getDom };
  },
  methods: {
    querySearchAsync(queryString, cb) {
      queryString ? console.log(queryString) : null;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb([]);
      }, 1000 * Math.random());
    },
    handleSelect(item) {},
  },
};
</script>

<style lang="less" scoped>
.TOP {
  position: relative;
  height: 70px;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  
  
}
#element{
    
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    margin: auto;
}
</style>
