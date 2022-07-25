<template>
  <div>
  <div style="max-width: 90ch; margin: 0px auto;">
    <h3 style="margin: 1ch 2ch">快速导航</h3>
    <div class="container shadow_lisght" >
      <el-row>
        <el-col :sm="24" :md="5" >
          <div style="margin-top: 2ch">
            <el-menu  class="el-menu-vertical-demo" router>
              <el-menu-item index="/Home/Card">
                <span>二手车   </span>
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
        <el-col :sm="24" :md="19">
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
    </div>
    <Post />
  </div>
</template>

<script>
import Post from "@/components/Buy&Sell/Detail_Poster.vue";
import "@/css/shadow.css";

export default {
  name: "HomePage",
  components: {
    Post,
  },
  data() {
    return {
      cout: 100,
    };
  },
  mounted: function () {
  },
  methods: {
    handleSelect(keyPath) {
      this.activeIndex = keyPath;
    },
    
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 1.5ch;
  border-radius: 1.5ch;
  max-width: 100ch;
  min-width: fit-content;
  margin: 0 1ch;
  background-color: #ffffff;
  min-width: 20ch;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
