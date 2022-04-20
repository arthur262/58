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
          <div style="padding:1ch;">
          <h4>
          {{ item.Year }}&nbsp;{{item.Model}}
          </h4>
          <p style="color:grey;">{{ item.description[0].substring(0,10) }}...</p>
          <div style="display:flex;float:right;">
          <h3 style="color:var(--el-color-primary)">{{item.Price}}</h3><h4>/Month</h4>
          </div>
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
      fir_five_lease:[],
      fir_five_sell:[],

    };
  },
  mounted: function () {
    this.get_post_list();
    this.fir_five_lease=this.get_fir_fiv(this.poster,'true');
  },
  methods: {
    async get_post_list() {
      await this.axios
        .post("/api/Post", { label: this.index })
        .then((response) => {
          this.poster = Array.from(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    /* 通过lease 判断，同时保留第一个在原数组中*/
    async get_fir_fiv(data,condition){
      await this.get_post_list();
      //var cont=0;
      console.log(data,condition);
      //var result=[];
      // for (let index = 0; index < data.length&&cont<=5; index++) {
      //   if(data[index].Lease==condition &&cont==0){
      //     result.push(data[index]);
          
      //   }
      //   else if(data[index].Lease==condition){
      //     result.push(data[index]);
      //     data.splice(index,1);
      //   }
      // }
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
