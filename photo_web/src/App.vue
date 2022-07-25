<template>
<div >
  <div style="min-height:100vh; height:fit-content" class = "wholeBack" >
   <router-view />
  </div>
</div>


</template>

<script>


export default {
  name: 'App',
  components: {

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
  padding:2ch 0;
}
.router-link-active {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
}
a {
  text-decoration: none;
  color:rgba(0, 0, 0, 0.7);
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



</style>
