<template>
  
  <div>
   <button v-on:click="data_send()">xxxx</button>
  </div>
 
</template>

<script>


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
      this.axios
        .post(
          "http://localhost:8081/login",
          {
    username: "xxx"
    }
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
