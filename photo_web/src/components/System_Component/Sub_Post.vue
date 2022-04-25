<template>
  <div>
    <el-card shadow="always" class="poster_box" style="border-radius: 1.5ch">
      <h2>上传照片</h2>
      
      <div>
        <el-upload
          action="#"
          list-type="picture-card"
          :http-request="modeUpload"
          :file-list="mode"
          :before-upload="beforeAvatarUpload"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <el-image style="width: 100px; height: 100px" id="example"/>
      <el-form ref="form" :model="form" label-width="80px">
        <!-- 地区 -->
        <h3>选择地区</h3>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="选择区域">
            <el-option label="Whole Halifax" value="Whole Halifax"></el-option>
            <el-option
              label="Halifax DownTown"
              value="Halifax DownTown"
            ></el-option>
            <el-option label="Dartmouth" value="Dartmouth"></el-option>
            <el-option label="Beford" value="Beford"></el-option>
            <el-option label="Other" value="Other"></el-option>
          </el-select>
        </el-form-item>
        <!-- 类别 -->
        <h3>选择类别</h3>
        <el-form-item label="类别">
          <el-select v-model="form.category" placeholder="请选择出售的类别">
            <el-option label="汽车" value="汽车"></el-option>
            <el-option label="家具" value="家具"></el-option>
            <el-option label="服饰&药妆" value="服饰&药妆"></el-option>
            <el-option label="电子器件" value="电子器件"></el-option>
            <el-option label="其他分类" value="其他分类"></el-option>
          </el-select>
        </el-form-item>
        <!-- 如果是汽车的类目 -->
        <div v-if="form.category == '汽车'">
          <el-form-item>
            <el-switch
              v-model="form.lease"
              size="large"
              active-text="转lease"
              inactive-text="二手车"
            />
          </el-form-item>
          <el-form-item label="车型">
            <el-input v-model="form.model" clearable />
          </el-form-item>

          <el-form-item label="几几年款">
            <el-select v-model="form.offset" placeholder="2020年款">
              <el-option label="2020" value="2020"></el-option>
              <el-option label="2019" value="2019"></el-option>
              <el-option label="2018" value="2018"></el-option>
              <el-option label="2017" value="2017"></el-option>
              <el-option label="2016" value="2016"></el-option>
              <el-option label="2015" value="2015"></el-option>
              <el-option label="2014" value="2014"></el-option>
              <el-option label="2013" value="2013"></el-option>
              <el-option label="2012" value="2012"></el-option>
              <el-option label="2011" value="2011"></el-option>
              <el-option label="2010" value="2010"></el-option>

              <el-option label="2009" value="2009"></el-option>
              <el-option label="2008" value="2008"></el-option>
              <el-option label="2007" value="2007"></el-option>
              <el-option label="2006" value="2006"></el-option>
              <el-option label="2005" value="2005"></el-option>
              <el-option label="2004" value="2004"></el-option>
              <el-option label="2003" value="2003"></el-option>
              <el-option label="2002" value="2002"></el-option>
              <el-option label="2001" value="2001"></el-option>
              <el-option label="2000" value="2000"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="表显里程">
            <el-input v-model="form.mile" type="number" clearable />
          </el-form-item>
        </div>

        <el-form-item label="信息描述">
          <el-input
            v-model="form.desc"
            type="textarea"
            show-word-limit
            maxlength="500"
            :autosize="true"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">上传</el-button>
          <el-button @click="clearAll">清空</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: [],
      dialogVisible: false,
      form: {
        category: "",
        lease: false,
        model: "",
        region: "",
        offset: 0,
        mile: 0,
        desc: "",
      },
    };
  },
  methods: {
    clearAll() {
      for (var item in this.form) {
        delete this.form[item];
      }
    },
    onSubmit() {
      console.log(this.form);
      console.log(this.mode[0].size);
    },

    modeUpload() {
       
    },
    //用来防止输入一些奇怪的东西
    beforeAvatarUpload(file) {
      var isJPG = false;
      var isLt2M = false;
      try {
        isJPG = file.type === "image/jpeg";
        isLt2M = file.size / 1024 / 1024 < 2;
      } catch (e) {
        this.$message.error("请不要攻击网站");
      }
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleCompressImage(img,type) {
            let reader = new FileReader();
            // 读取文件
            reader.readAsDataURL(img);
            reader.onload = function (e) {
                let image = new Image(); //新建一个img标签
                image.src = e.target.result;
                image.onload = function () {
                    let canvas = document.createElement('canvas');
                    let context = canvas.getContext('2d');
                    // 定义 canvas 大小，也就是压缩后下载的图片大小
                    let imageWidth = 300; //压缩后图片的大小
                    let imageHeight = 200;
                    canvas.width = imageWidth;
                    canvas.height = imageHeight;
                    // 图片不压缩，全部加载展示
                    context.drawImage(image, 0, 0, imageWidth,imageHeight);
                    return canvas.toDataURL(`image/${type}`);
                };
            }
        }
  },
};
</script>

<style lang="less" scoped>
.poster_box {
  border-radius: 1.5ch;
  margin: 1.5ch 1ch;
  max-width: 100ch;
  width: 80ch;
  min-width: 90%;
}
</style>
