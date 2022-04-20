<template>
  <div class="container">
    <el-row class="block-col-2">
      <el-col :span="4">
        
          <div class="side_list"></div>
        
      </el-col>
      <el-col :span="20">
        <el-page-header
          :content="index"
          @back="() => $router.back()"
          style="margin-left: 2ch; margin-top: 5ch"
        />
        <!-- 展示最新的5个lease car -->
        <h3>Lease</h3>
        <div class="hor_slide">
        <el-card
        shadow="always"
          class="poster_box"
          v-for="item in poster.slice(0,5)"
          :key="item.title"
          :body-style="{padding:'5px'}"
        >
        <el-image
            :src="item.picture[0]"
            loading="lazy"
            style="width:25ch;border-radius: 1.5ch;"
          />
          <h4>
          {{ item.Year }}&nbsp;{{item.Model}}
          </h4>
          <p style="color:grey;">{{ item.description[0].substring(0,10) }}...</p>
          <div style="display:flex;float:right;">
          <h3 style="color:var(--el-color-primary)">{{item.Price}}</h3><h4>/Month</h4>
          </div>
        </el-card>
        </div>
        <!-- 展示最新的5个Sell car -->
        <h3>Sell</h3>
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
          <div style="display:flex;float:right;">
          <h3>3304</h3><h4>&nbsp;Cad</h4>
          </div>
        </el-card>
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
  width: 100ch;
  margin: 0 auto;
}
.side_list {
  border: 1px solid black;
  height: 40ch;
  margin:5ch 2ch 0 0 ;
  border-radius: 1.5ch;
  margin-top: 10ch;
}
.poster_box {
  height:fit-content;
  width:fit-content;
  border-radius: 1.5ch;
  padding:5px;
  background-color:whitesmoke;
  
}
.hor_slide{
  
}
</style>
