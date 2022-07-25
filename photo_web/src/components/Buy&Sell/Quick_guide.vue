<template>
  <div class="container shadow_lisght" ref="quick_box">
  
    <el-row>
      <el-col :span="5">
          <div style="margin-top:2ch;">
        <el-menu
          default-active=""
          class="el-menu-vertical-demo"
          router
        >
          
            <el-menu-item index="/Home/Card">
            <span>二手车</span>
            </el-menu-item>
          
           <el-menu-item index="/Home/PosterList?view=jiaju">
            <span>家具</span>
            </el-menu-item>

            <el-menu-item index="/Home/PosterList?view=huazhangping">
            <span>服饰&药妆</span>
            </el-menu-item>
            
          <el-menu-item index="/Home/PosterList?view=dainqi">  
            <span>电子器件</span>
          </el-menu-item>

          <el-menu-item index="/Home/PosterList?view=dainqi">  
            <span>其他分类</span>
          </el-menu-item>
          
          
        </el-menu>
          </div>
      </el-col>
      <el-col :span="19">
        <el-carousel
          :interval="5000"
          arrow="always"
          style="border-radius: 1.5ch"
        >
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "@/css/shadow.css";
import { is_phone } from "@/js/phone_test.js";
import { ref } from "vue";

export default {
  setup: function () {
    const quick_box = ref(null);
    const getDom = () => {
      quick_box.value.style = "min-width:20ch";
    };
    return { quick_box, getDom };
  },
  mounted: function () {
    this.testwidth();
  },
  methods: {
    handleSelect(keyPath) {
      this.activeIndex = keyPath;
    },
    testwidth() {
      if (!is_phone()) {
        this.getDom();
      }
    },
  },
};
</script>

<style lang="less" scoped>

</style>
