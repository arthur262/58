/* eslint-disable vue/multi-word-component-names */
<template>
<div class = "TOP">
  
  <div id = "logoBox"   ref="nav_box">
    <div id = "logoChild">
      <a href="#">  
       <el-row>
       <el-col :span="2">
       <el-image
        :src="url"
        ></el-image>
        </el-col>
        </el-row>
      </a>
    </div>
  </div>

  <div class = "title">
    <el-row>
    <el-col :span="25">
    <el-link href="#" 
      target=""
      style="color: white; font-size:1.5vw"
      >哈法留学万事屋</el-link> 

     </el-col>
     </el-row>
  </div>
  
  <div class = "searchBar">
     <el-input
        
        class="w-50 m-2"
        size="small"
        placeholder="搜索"
        />
  </div>
   
  <div class = "newSubmit">
    <el-button type="text" class = "fb">发布</el-button>
  </div>
</div>
</template>

<script>
/* eslint-disable */
//https://blog.csdn.net/ZMM_Devil/article/details/103871602
import {is_phone}from "@/js/phone_test.js"
import { ref } from "vue";
export default {
    data() {
      return {
        fits: 'contain',
        url:'http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png',
        herf:'#'
      }
    },
    setup: function (){
    const nav_box=ref(null);
    const getDom = () => {
      nav_box.value.style = "padding:1.5ch 2ch";
      
    };  
    return { nav_box, getDom};
  },
  testwidth(){
      
      if(is_phone()){
        this.getDom();
      }
  }
}
</script>


<style>
.TOP {
    position: relative;
    height: 70px;
    width: auto;
    background: rgba(0, 0, 0, 0.75);
          
}


#logoBox {
    width: 70%;
    height: 100%;
    position: relative;
    right: -30px;
}
#logoChild {
    position: absolute;
    top: 53%;
    transform: translate(0, -50%);
    
}


.title{
  position: absolute;
  left: 18.26%;
  right: 68.23%;
  top: auto;
  bottom: 30.09%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: auto;
  line-height: auto;
/* identical to box height */
  color: #FFFFFF;

  mix-blend-mode: lighten;
}


.searchBar{
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  padding:auto;

  position: absolute;
  left: 35.82%;
  right: 35.88%;
  top: auto;
  bottom: 30%;

  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}


.newSubmit{
  width: 50px;
  position: relative;
  left: 84.55%;
  right: 12.67%;
  bottom: 75%;
}
</style>