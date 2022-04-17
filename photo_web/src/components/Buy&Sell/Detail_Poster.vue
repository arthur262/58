<template>
  <div>
      <h3 style="margin-left: 4%">Location:{{location}}</h3>
      <el-card shadow="hover" class="box-card poster_box" v-for="item in poster" :key="item.name">
      <div>
          {{item.name}}

      </div>
      </el-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            location:"xxx",
            poster:[
                {
                    name: "name",
                    location: "location",
                    label: "label",
                    time: "time",
                    description: "description",
                    picture: "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
                },
                {
                    name: "name",
                    location: "location",
                    label: "label",
                    time: "time",
                    description: "description",
                    picture: "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
                }
            ]
        }
    }

}
</script>

<style lang="less" scoped>
.poster_box{
    border-radius:1.5ch;
    margin:1.5ch 1ch;
}

</style>