<template>
<div>
  <Back/>
  <Top/>
  <div style="max-width:100%;
  min-height:100vh;
  margin:0 auto;">
   <router-view />
  </div>
</div>
</template>

<script>

import Top from '@/components/topBar.vue';
import Back from '@/components/backGround.vue';

export default {
  name: 'App',
  components: {
   Top,
   Back

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


</style>
