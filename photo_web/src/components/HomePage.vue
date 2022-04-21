<template>
  <div style="max-width: 95%; width: fit-content; margin: 0 auto">
    <router-link to="/Post_detail">Post_detail</router-link>
    
      <QuickGuide />
    

    <div style="max-width: 95%; width: fit-content; margin: 0 auto">
      <Post />
    </div>
    <div style="margin: 0 auto; width: fit-content">
      <el-pagination background layout="prev, pager, next" :total="cout" />
    </div>
  </div>
</template>

<script>
import QuickGuide from "@/components/Buy&Sell/Quick_guide.vue";
import Post from "@/components/Buy&Sell/Detail_Poster.vue";

export default {
  name: "HomePage",
  components: {
    QuickGuide,
    Post,
  },
  data() {
    return {
      cout: 100,
    };
  },
};
</script>

<style></style>
