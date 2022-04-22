<template>
  <div class="container">
    
    <el-row class="block-col-2">
      <el-col :span="4">
        
        <el-affix :offset="100">
          <div class="side_list">
            </div>
        </el-affix>
        
      </el-col>
      <el-col :span="20">
        <el-page-header  :content=index @back="() => $router.back()" style="margin-left:2ch;margin-top:5ch;"/> 
    <Card :msg="poster"/>
      </el-col>
    </el-row>
     </div>
</template>

<script>
import "../System_Component/NavBar.vue";
import Card from "@/components/Buy&Sell/PostCard.vue";

export default {
  data(){
    return{
      index:"",
      poster: [],
    }
  },
  mounted: function() {
    this.activeIndex="/Home";
    this.index=this.IndexToMain(this.get().view);
    this.get_post_list();
    
  },
  methods: {
    get(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
    },
    IndexToMain(english){
      if(english=="jiaju"){
        return "家具";
      }else if(english=="ershouche"){
        return "二手车";
      }else if(english=="huazhangping"){
        return "服饰&化妆品";
      }else if(english=="dainqi"){
        return "电子器件";
      }

    },
    get_post_list() {
      this.axios
        .post("/api/Post",{"label":this.index})
        .then((response) => {
          this.poster = Array.from(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  },
  components: {
    Card,
  }

}
</script>

<style lang="less" scoped>
.container{
  width: 120ch;
  margin: 0 auto;
}
.side_list{
  border: 1px solid black;
  height:40ch;
  margin-right: 2ch;
  border-radius: 1.5ch;
  margin-top:10ch;
}
</style>