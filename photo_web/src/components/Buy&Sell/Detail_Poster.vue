<template>
  <div style="width: 80ch; margin: 5ch auto">
    <el-row class="block-col-2">

      <el-col :span="18" style="display:flex;">
        <h3 style="margin-left: 4%">Your Location:</h3><h3 style="color:grey;">{{ user_location }}</h3>
      </el-col>
      <!-- dropdown-menu -->
      <el-col :span="6" style="display:flex; align-items: center;">
        <el-dropdown style="float: right;" @command="handleCommand">
          <span class="el-dropdown-link">
            Choose your location
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="ALL">ALL</el-dropdown-item>
              <el-dropdown-item command="DownTown">Halifax DownTown</el-dropdown-item>
              <el-dropdown-item command="Dartmouth">Dartmouth</el-dropdown-item>
              <el-dropdown-item command="Beford">Beford</el-dropdown-item>
              <el-dropdown-item command="Other">Other</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>
    <Card :msg="poster" />
  </div>
</template>

<script>
import Card from "@/components/PostCard.vue";
export default {
  data() {
    return {
      user_location: "",
      poster: [
        {
          id: "xxx",
          title: "This is a title",
          location: "location",
          label: "label",
          time: "time",
          description: "This is a description This is a description This is a description This is a description This is a description",
          picture: [
            "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
          ],
        },
        {
          title: "This is a title",
          location: "location",
          label: "label",
          time: "time",
          description: "This is adescription",
          picture: [
            "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
            "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
            "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
            "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
          ],
        },
        {
          title: "This is a title",
          location: "location",
          label: "label",
          time: "time",
          description: "This is adescription",
          picture: [
            "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
            "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
          ],
        },
        {
          title: "This is a title",
          location: "location",
          label: "label",
          time: "time",
          description: "This is adescription",
          picture: [
            "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
            "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
            "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png",
          ],
        },
      ],
    };
  },
  components: {
    Card,
  },
  methods: {
    handleCommand(msg){
      this.user_location=msg;

    }
  }
};
</script>

<style lang="less" scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
