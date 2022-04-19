<template>
<div>
  <QuickGuide/> 
  <Post/>
</div>
  
</template>

<script>

import QuickGuide from '@/components/Buy&Sell/Quick_guide.vue';
import Post from '@/components/Buy&Sell/Detail_Poster.vue';


export default {
name: 'HomePage',
  components: {
   QuickGuide,
   Post
  },
}
</script>

<style>

</style>