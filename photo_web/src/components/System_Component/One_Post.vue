<template>
  <div style="max-width: 100ch;
  min-width: 90%; margin: 0 auto; padding: 2ch">
    <el-page-header
          
          @back="() => $router.back()"
          style="margin:2ch 0 2ch 2ch"
        />
    
    <!-- 显示 otehr,家具,化妆品,和电子器件 -->
    <div
      v-if="
        poster.label == '家具' ||
        poster.label == '服饰&药妆' ||
        poster.label == '电子器件' ||
        poster.label == 'Other'
      "
    >
      <el-card class="box-card" style="max-width: 100ch;
  min-width: 90%; border-radius: 1.5ch">
        <h2>{{ poster.title }}</h2>
        <el-row>
          <el-col :span="16">
            <el-carousel indicator-position="outside" style="width: 95%">
              <el-carousel-item v-for="item in poster.picture" :key="item">
                <el-image
                  :src="item"
                  lazy
                  class="el-image__inner"
                  style="border-radius: 1ch"
                />
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="8">
            <h4
              style="
                font-weight: bold;
                margin: auto 0.5ch;
                color: var(--el-color-primary);
              "
            >
              {{ poster.label }}
            </h4>
            <h4>地址：{{ poster.location }}</h4>
            <h4>
              发布时间: {{ poster.time.substring(0, 10) }}
              {{ poster.time.substring(15, 19) }}
            </h4>
            <h4>联系方式:{{ poster.phone }}</h4>
          </el-col>
        </el-row>
      </el-card>
      <el-card
        class="box-card"
        style="max-width: 100ch;
  min-width: 90%; border-radius: 1.5ch; margin: 2ch 0"
      >
        <h3>描述</h3>
        <h4 v-for="item in poster.description" :key="item" style="margin: 0">
          {{ item }}
        </h4>
      </el-card>
    </div>
    <!-- 显示汽车类目 -->
    <div v-else-if="poster.label == '二手车'">
      <el-card class="box-card" style="max-width: 100ch;
  min-width: 90%; border-radius: 1.5ch">
        <h2>{{ poster.title }}</h2>
        <el-row>
          <el-col :span="16">
            <el-carousel indicator-position="outside" style="width: 95%">
              <el-carousel-item v-for="item in poster.picture" :key="item">
                <el-image
                  :src="item"
                  lazy
                  class="el-image__inner"
                  style="border-radius: 1ch"
                />
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="8">
            
              <h3 style="font-weight: bold;color: var(--el-color-primary);" v-if="poster.Lease==true">
              转Lease
              </h3>
              <h3 v-else
              style="
                font-weight: bold;
                color: var(--el-color-primary);
              "
            >
            {{ poster.label}}
              </h3>
          
            <h4>年份: {{ poster.Year }}</h4>
            <h4>地址：{{ poster.location }}</h4>
            <h4>
              发布时间: {{ poster.time.substring(0, 10) }}
              {{ poster.time.substring(15, 19) }}
            </h4>
            <h4>联系方式:{{ poster.phone }}</h4>
            <div v-if="poster.Lease==true">
              <h1
              style="
                font-weight: bold;
                float:right;
                color: var(--el-color-primary);
              "
            >
            {{ poster.Price}}/Moth
              </h1>
            </div>
            <div v-else>
              <h1
              style="
                font-weight: bold;
                float:right;
                color: var(--el-color-primary);
              "
            >
            {{ poster.Price}}/Cad
              </h1>
            </div>
          </el-col>
        </el-row>
      </el-card>
      <el-card
        class="box-card"
        style="max-width: 100ch;
  min-width: 90%; border-radius: 1.5ch; margin: 2ch 0"
      >
        <h3>描述</h3>
        <h4 v-for="item in poster.description" :key="item" style="margin: 0">
          {{ item }}
        </h4>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.get();
    this.get_post_detail();
    
  },
  data() {
    return {
      
      id: "",
      poster: [],
    };
  },
  methods: {
    get() {
      var url = window.document.location.href.toString();
      var u = url.split("?");
      if (typeof u[1] == "string") {
        this.id=u[1].split("=")[1];
        console.log(this.id);
      } else {
        return {};
      }
    },
    get_post_detail() {
      this.axios
        .post("/api/Post", { Current_page: "Poster", user_id: this.id })
        .then((response) => {
          this.poster = response.data[0];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
