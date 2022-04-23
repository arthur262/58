<template>
<el-card
      shadow="hover"
      class="box-card poster_box"
      v-for="item in msg"
      :key="item.title"
      style="border-radius: 1.5ch;"
    >
      <!-- 如果当前的poster只有一张的图片 -->
      <el-row v-if="getJsonLength(item.picture) < 2">
        <router-link :to="'/Post_detail?post='+item._id">
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
                    <p style="color: grey;" >
                    {{item.time.substring(0,10)}} {{item.time.substring(15,19)}}
                    </p>
                    
                </el-col>
                <el-col :span="8" >
                    <p style="float:right; color: grey;"> {{item.location}}</p>
                </el-col>
            </el-row>

            <!-- 限制字符串显示长度为20个char -->
            <span v-for="child in item.description.slice(0,1)" :key="child">
            <p v-if="child.length<40">
            {{child}}
            </p>
            <p v-else>
              {{child.substring(0,40)}}...
            </p>
            </span>
          </div>
        </el-col>
        </router-link>
      </el-row>


      <!-- 如果当前的poster是否有1-4的图片 -->
      <div v-else-if="getJsonLength(item.picture) < 4">
        
        <!-- 显示文字 -->
       
        <router-link :to="'/Post_detail?post='+item._id">
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
                    {{item.time.substring(0,10)}} {{item.time.substring(15,19)}}
                    </p>
                    
                </el-col>
                <el-col :span="8" >
                    <p style="float:right; color: grey;"> {{item.location}}</p>
                </el-col>
            </el-row>

            <!-- 限制字符串显示长度为20个char -->
            <span v-for="child in item.description.slice(0,1)" :key="child">
            <p v-if="child.length<40">
            {{child}}
            </p>
            <p v-else>
              {{child.substring(0,40)}}...
            </p>
            </span>
          </div>
          <div  style="display:flex;">
            <el-image
            v-for="child in item.picture" :key="child"
            :src="child"
            loading="lazy"
            style="border-radius: 1ch;margin:0.5ch;width:20ch;height:auto;"
          />
          </div>
          </router-link>
        

      </div>
      <!-- 如果当前的poster图片超出范围 -->
      <div v-else-if="getJsonLength(item.picture)>= 4">
        
        <!-- 显示文字 -->
       <router-link :to="'/Post_detail?post='+item._id">
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
                    {{item.time.substring(0,10)}} {{item.time.substring(15,19)}}
                    </p>
                    
                </el-col>
                <el-col :span="8" >
                    <p style="float:right; color: grey;"> {{item.location}}</p>
                </el-col>
            </el-row>

            <!-- 限制字符串显示长度为20个char -->
            <span v-for="child in item.description.slice(0,1)" :key="child">
            <p v-if="child.length<40">
            {{child}}
            </p>
            <p v-else>
              {{child.substring(0,40)}}...
            </p>
            </span>
          </div>
          <div  style="display:flex;">
            <el-image
            v-for="child in item.picture.slice(0,5)" :key="child"
            :src="child"
            loading="lazy"
            
            style="border-radius: 1ch;margin:0.5ch;width:20ch;height:auto;"
          />
          </div>
          </router-link>
      </div>
    </el-card>
  
</template>

<script>
export default {
    props: {
    msg: Array
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
    get_post(item) {
      var url=window.location.href;
      console.log(url);
      console.log(item);

    }

  },
  mounted: function () {
    
  }

}
</script>

<style lang="less" scoped>
.poster_box {
  border-radius: 1.5ch;
  margin: 1.5ch 1ch;
  max-width: 100ch;
  min-width: 90%;
}
.card_detail {
  padding: 0 2ch;
  
}

</style>