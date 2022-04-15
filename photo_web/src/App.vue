<template>
  <div style="width:fit-content;
  min-height:100vh;
  margin:0 auto;">
   <router-view />
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;

}


</style>
