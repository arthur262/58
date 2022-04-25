<template>
  <div class="container">
    <el-row class="block-col-2">
      <el-col :span="3">
        <div class="side_list"></div>
      </el-col>
      <el-col :span="21">
        <el-page-header
          :content="index"
          @back="() => $router.back()"
          style="margin-left: 2ch; margin-top: 5ch"
        />
        <!-- 展示最新的5个lease car -->
        
        <h3>Lease</h3>
        
          <el-scrollbar style="height:fit-content">
            <div style="display:flex;">
          <div
            class="poster_box"
            v-for="item in fir_five_lease"
            :key="item.title"
          >
          <router-link :to="'/Post_detail?post='+item._id">
            <el-image
              :src="item.picture[0]"
              loading="lazy"
              style="width: 25ch; border-radius: 1.5ch"
            />
            <div style="padding: 1ch">

              {{ item.title }}
              <h4>{{ item.Year }}&nbsp;{{ item.Model }}</h4>
              <p style="color: grey">
                {{ item.description[0].substring(0, 10) }}...
              </p>
              <div style="display: flex; float: right">
                <h3 style="color: var(--el-color-primary)">{{ item.Price }}</h3>
                <h4>/Month</h4>
              </div>
              </div>
              </router-link>
            </div>
            
            </div>
          </el-scrollbar>
        
        <!-- 展示最新的5个Sell car -->
        <h3>Sell</h3>
        <el-scrollbar style="height:fit-content">
            <div style="display:flex;">
          <div
            class="poster_box"
            v-for="item in fir_five_sell"
            :key="item.title"
          >
          <router-link :to="'/Post_detail?post='+item._id">
            <el-image
              :src="item.picture[0]"
              loading="lazy"
              style="width: 25ch; border-radius: 1.5ch"
            />
            <div style="padding: 1ch">
              {{ item.title }}
              <h4>{{ item.Year }}&nbsp;{{ item.Model }}</h4>
              <p style="color: grey">
                {{ item.description[0].substring(0, 10) }}...
              </p>
              <div style="display: flex; float: right">
                <h3 style="color: var(--el-color-primary)">{{ item.Price }}</h3>
                <h4>&nbsp; Cad</h4>
              </div>
              </div>
              </router-link>
            </div>
            </div>
          </el-scrollbar>
        <Card :msg="poster" />
      </el-col>
    </el-row>
  </div>
</template>

<script >
import Card from "@/components/Buy&Sell/PostCard.vue";
export default {
  data() {
    return {
      index: "二手车",
      poster: [],
      fir_five_lease: [],
      fir_five_sell: [],
    };
  },
  mounted: function () {
    Promise.all([this.get_post_list()])
      .then(() => {
        this.fir_five_lease = this.get_fir_fiv(this.poster, true);
        this.fir_five_sell = this.get_fir_fiv2(this.poster, false);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
     get_post_list() {
      return new Promise((resolve, reject) => {
        this.axios
          .post("/api/Post", { "label": this.index,"Current_page": "Card","User_location":"Whole Halifax"})
          .then((response) => {
            this.poster = Array.from(response.data);
            
            resolve();
          })
          .catch(function (error) {
            console.log(error);
            reject();
          });
      });
    },
    /* 通过lease 判断，同时保留第一个在原数组中, 为了内存不被占用*/
     get_fir_fiv(data, condition) {
      var cont=0;
      var result=[];
      for (let index = 0; index < data.length&&cont<=5; index++) {
        if(data[index].Lease==condition ){
          if(cont==0){
          result.push(data[index]);
          }
          else{
          result.push(data[index]);
          data.splice(index,1);
          index--;
          }
          cont++;
        }
      }
      return result;
     },
      get_fir_fiv2(data, condition) {
      var cont=0;
      var result=[];
      for (let index = 0; index < data.length&&cont<=5; index++) {
        if(data[index].Lease==condition ){
          if(cont==0){
          result.push(data[index]);
          }
          else{
          result.push(data[index]);
          data.splice(index,1);
          index--;
          }
          cont++;
        }
      }
      
      return result;
    }
  },
  components: {
    Card,
  },
};
</script>

<style lang="less" scoped>
.container {
  max-width: 100ch;
  min-width: 90%;
  margin: 0 auto;
}
.side_list {
  border: 1px solid black;
  height: 40ch;
  margin: 5ch 2ch 0 0;
  border-radius: 1.5ch;
  margin-top: 10ch;
}
.poster_box {
  height: fit-content;
  border-radius: 1.5ch;
  padding: 10px;
  width:fit-content;
  margin: 0.5ch 1ch;
  background-color: whitesmoke;
  box-shadow: var(--el-box-shadow-light);
  border: 1px solid var(--el-border-color-light, #ebeef5);
}
.hor_slide {
  display:flex;
  max-width: 100ch;
  white-space: nowrap;
  overflow-x:scroll ;
  overflow-y: hidden;
  
}
.submit_btn{
  position: absolute;
  min-width: 40%;
  height:45ch;
  opacity: 0;
  z-index:10;
}

</style>
