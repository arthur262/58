<template>
<div>
  <button @click="data_send()">测试json</button>
</div>
  
</template>

<script>
import qs from 'qs';

export default {
  name: 'App',
  components: {
   
  },
  data() {
    return {
    usernames: {
      name: 'Usernames',
      password: 'Password'
    },
    }
  },
  mounted: function (){
    
  },
  methods:{
    data_send(){
      this.axios
        .post(
          "/login.js",
        {params: qs.stringify(this.usernames)},
        {headers:{"Content-type":"application/x-www-form-urlencoded"}}
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
