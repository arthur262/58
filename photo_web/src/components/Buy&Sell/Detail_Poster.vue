<template>
  <div style="width: 80ch; margin: 5ch auto">
    <h3 style="margin-left: 4%">Your Location:{{ location }}</h3>
    <el-card
      shadow="hover"
      class="box-card poster_box"
      v-for="item in poster"
      :key="item.title"
    >
      <!-- 如果当前的poster只有一张的图片 -->
      <el-row v-if="getJsonLength(item.picture) < 2">
        
        <el-col :span="8">
          <el-image
            :src="item.picture[0]"
            loading="lazy"
            style="border-radius: 1ch"
          />
        </el-col>
        <!-- 显示文字 -->
        <el-col :span="16">
          <div class="card_detail">
            <h3 style="font-weight: bold; margin:0.5ch 0.5ch 0.5ch 0ch">
              {{ item.title }}
            </h3>
            <el-row style="line-height:0.5em;">
                <el-col :span="16" style="display:flex;">
                    <p style="font-weight: bold;margin:auto 0.5ch; color:var(--el-color-primary);">
                    {{item.label}}
                    </p>
                    <p style="color: grey;">
                    {{item.time}}
                    </p>
                    
                </el-col>
                <el-col :span="8" >
                    <p style="float:right; color: grey;"> {{item.location}}</p>
                </el-col>
            </el-row>

            <!-- 限制字符串显示长度为20个char -->
            <p v-if="item.description.length<40">
            {{item.description}}
            </p>
            <p v-else>
              {{item.description.substring(0,40)}}...
            </p>
          </div>
        </el-col>
      </el-row>

      <!-- 如果当前的poster是否有4以上的图片 -->
      <div v-else-if="getJsonLength(item.picture) < 4">
        
        <!-- 显示文字 -->
        
          <div class="card_detail">
            <h3 style="font-weight: bold; margin:0.5ch 0.5ch 0.5ch 0ch">
              {{ item.title }}
            </h3>
            <el-row style="line-height:0.5em;">
                <el-col :span="16" style="display:flex;">
                    <p style="font-weight: bold;margin-right:1ch; color:var(--el-color-primary);">
                    {{item.label}}
                    </p>
                    <p style="color: grey;">
                    {{item.time}}
                    </p>
                    
                </el-col>
                <el-col :span="8" >
                    <p style="float:right; color: grey;"> {{item.location}}</p>
                </el-col>
            </el-row>

            <!-- 限制字符串显示长度为20个char -->
            <p v-if="item.description.length<40">
            {{item.description}}
            </p>
            <p v-else>
              {{item.description.substring(0,40)}}...
            </p>
          </div>
          <div  style="display:flex;">
            <el-image
            v-for="child in item.picture" :key="child"
            :src="child"
            loading="lazy"
            style="border-radius: 1ch;margin:0.5ch;width:20ch;height:auto;"
          />
          </div>

      </div>
      <!-- 如果当前的poster图片超出范围 -->
      <div v-else-if="getJsonLength(item.picture)>= 4">
        
        <!-- 显示文字 -->
        
          <div class="card_detail">
            <h3 style="font-weight: bold; margin:0.5ch 0.5ch 0.5ch 0ch">
              {{ item.title }}
            </h3>
            <el-row style="line-height:0.5em;">
                <el-col :span="16" style="display:flex;">
                    <p style="font-weight: bold;margin-right:1ch; color:var(--el-color-primary);">
                    {{item.label}}
                    </p>
                    <p style="color: grey;">
                    {{item.time}}
                    </p>
                    
                </el-col>
                <el-col :span="8" >
                    <p style="float:right; color: grey;"> {{item.location}}</p>
                </el-col>
            </el-row>

            <!-- 限制字符串显示长度为20个char -->
            <p v-if="item.description.length<40">
            {{item.description}}
            </p>
            <p v-else>
              {{item.description.substring(0,40)}}...
            </p>
          </div>
          <div  style="display:flex;">
            <el-image
            v-for="child in item.picture.slice(0,5)" :key="child"
            :src="child"
            loading="lazy"
            
            style="border-radius: 1ch;margin:0.5ch;width:20ch;height:auto;"
          />
          </div>

      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "xxx",
      poster: [
        {
          id: "xxx",
          title: "This is a title",
          location: "location",
          label: "label",
          time: "time",
          description: "This is a description",
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
  methods: {
    getJsonLength(jsonData) {
      var jsonLength = 0;
      // eslint-disable-next-line no-unused-vars
      for (var item in jsonData) {
        jsonLength++;
      }
      return jsonLength;
    },
  },
};
</script>

<style lang="less" scoped>
.poster_box {
  border-radius: 1.5ch;
  margin: 1.5ch 1ch;
}
.card_detail {
  padding: 0 2ch;
  
}
</style>
