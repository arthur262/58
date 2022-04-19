<template>
  <div class="container">
    <el-row class="block-col-2">
      <el-col :span="4">
        <el-affix :offset="100">
          <div class="side_list"></div>
        </el-affix>
      </el-col>
      <el-col :span="20">
        <el-page-header
          :content="index"
          @back="() => $router.back()"
          style="margin-left: 2ch; margin-top: 5ch"
        />
        <!-- 展示最新的5个lease car -->
        <h3>Lease</h3>
        <el-card
          class="poster_box"
          v-for="item in poster.slice(0,5)"
          :key="item.title"
        >
        <el-image
            :src="item.picture[0]"
            loading="lazy"
            style="border-radius: 1ch;width:20ch;height:10ch;"
          />
          <p>
          {{ item.title.substring(0,10) }}
          </p>
          <br/>
          <p>
          {{item.time.substring(0,10)}} {{item.time.substring(15,19)}}
          </p>
        </el-card>
        <!-- 展示最新的5个Sell car -->
        <h3>Sell</h3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: "二手车",
      poster: [],
    };
  },
  mounted: function () {
    this.get_post_list();
  },
  methods: {
    get_post_list() {
      this.axios
        .post("/api/Post", { label: this.index })
        .then((response) => {
          this.poster = Array.from(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.container {
  width: 120ch;
  margin: 0 auto;
}
.side_list {
  border: 1px solid black;
  height: 40ch;
  margin-right: 2ch;
  border-radius: 1.5ch;
  margin-top: 10ch;
}
.poster_box {
  height:fit-content;
  width:fit-content;
  border-radius: 1.5ch;
  padding:5px;
  background-color:var(--el-color-primary)
  
}
</style>
