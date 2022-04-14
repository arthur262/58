<template>
  
  <div>
   <button v-on:click="data_send()">xxxx</button>
  </div>
 
</template>

<script>
import axios from 'axios'



export default {
  name: 'App',
  components: {
   
  },
  data() {
    return {
    username: "xxx",
    }
  },
  mounted: function (){
    
  },
  methods:{
    data_send(){
      
      axios.post(
        "/api/login"
        ,this.username
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
