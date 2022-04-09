<template>
<div>
</div>
  
</template>

<script>


export default {
  name: 'App',
  components: {
   
  },
  mounted: function (){
    this.getdata();
    
  },
  methods:{
    getdata(){
      this.axios
        .get(
        )
        .then((response) => {
          

          
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
