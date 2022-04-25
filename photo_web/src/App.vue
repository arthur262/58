<template>
<div class = "wholeBack">

<Top/>
  <div style="width:fit-content;
  max-width:100%;
  min-height:100vh;
  margin:0 auto;">
   <router-view />
  </div>

  <el-row class = "foot">
    <el-col :span ="10"></el-col>
    
  <footer>
    
      <el-link href="/" icon = "el-icon-s-home" style="color:#d3dcff;font-size:1.2vw">主页</el-link>
    
       &nbsp; &nbsp; &nbsp;
    
      <el-link href="contactUs.vue" target="_blank" icon = "el-icon-phone" style="color:#fff2db;font-size:1.3vw">联系我们</el-link>
      &nbsp; &nbsp; &nbsp;
       <el-link href="https://github.com/arthur262/58" target="_blank" icon = "el-icon-files" style="color:rgb(238, 191, 175);font-size:1.3vw">开源代码</el-link>
    
    
  </footer>
  </el-row>
  
</div>


</template>

<script>

import Top from '@/components/System_Component/topBar.vue';


export default {
  name: 'App',
  components: {
   Top,

  },
  data() {
    return {

    
    }
  },
  mounted: function (){
    
  },
  methods:{

  }
}
</script>

<style >
.wholeBack{
  background:linear-gradient(70deg, rgb(235, 253, 225),rgb(255, 240, 206));
}
:root{
  --el-color-primary:#FFB52E !important;
}
#app {
  font-family: Robot,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0;
  padding:0;

}
.foot{
  display:inline-block;
  vertical-align: middle;
  position: relative;
  line-height: 70px; 
  width: 100%;
  background: rgba(136, 136, 136, 0.75);
}


</style>
