<template>
  <div>
    {{index}} 
     </div>
</template>

<script>
import "../NavBar.vue";

export default {
  data(){
    return{
      index:"",
    }
  },
  mounted: function() {
    this.activeIndex="/Home";
    this.index=this.get().view;
    
  },
  methods: {
    get(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
    },

  }

}
</script>

<style>

</style>