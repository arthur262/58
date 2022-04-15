<template>
  <div style="width:fit-content;
  min-height:100vh;
  margin:0 auto;">
  <div style="margin:0 auto; width:fit-content;">
  <Navigate/>
  </div>
   <router-view />
  </div>
 
</template>

<script>
import Navigate from '@/components/NavBar.vue';
export default {
  name: 'App',
  components: {
   Navigate
  },
  data() {
    return {

    
    }
  },
  mounted: function (){
    
  },
  methods:{
    data_send(){
      this.axios.post(
        "/api/login"
        )

        .then((response) => {
          console.log(response);

          
        })
        .catch(function (error) {
          console.log(error);
        });
    }

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
