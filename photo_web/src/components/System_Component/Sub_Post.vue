<template>
  <div>
    <el-card shadow="always" class="poster_box" style="border-radius: 1.5ch">
      <h2>上传照片</h2>

      <div>
        <el-upload
          action="#"
          list-type="picture-card"
          :http-request="addImage"
          :on-remove="removeImage"
          :before-upload="beforeAvatarUpload"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <!--  :rules="rules" -->
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        class="demo-ruleForm"
      >
        <!-- 地区 -->
        <h3>选择地区</h3>
        <el-form-item label="活动区域" prop="region">
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
        <el-form-item label="类别" prop="category">
          <el-select v-model="form.category" placeholder="请选择出售的类别">
            <el-option label="汽车" value="汽车"></el-option>
            <el-option label="家具" value="家具"></el-option>
            <el-option label="服饰&药妆" value="服饰&药妆"></el-option>
            <el-option label="电子器件" value="电子器件"></el-option>
            <el-option label="其他分类" value="其他分类"></el-option>
          </el-select>
        </el-form-item>
        <!-- 如果是汽车的类目 -->
        <div v-show="form.category == '汽车'">
          <el-form-item>
            <el-switch
              v-model="car_form.lease"
              size="large"
              active-text="转lease"
              inactive-text="二手车"
            />
          </el-form-item>
          <el-form-item label="车型">
            <el-input v-model="car_form.model" clearable />
          </el-form-item>

          <el-form-item label="几几年款">
            <el-select v-model="car_form.offset" placeholder="2022年款">
              <el-option label="2020" value="2022"></el-option>
              <el-option label="2019" value="2021"></el-option>
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
            <el-input v-model="car_form.mile" type="number" clearable />
          </el-form-item>
        </div>

        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" clearable />
        </el-form-item>
        <el-form-item label="信息描述" prop="desc">
          <el-input
            v-model="form.desc"
            type="textarea"
            show-word-limit
            maxlength="500"
            :autosize="true"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">上传</el-button>
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
      form: {
        title: "",
        region: "",
        category: "",
        desc: "",
      },
      //如果是汽车拥有这些
      car_form: {
        lease: false,
        model: "",
        offset: null,
        mile: null,
      },

      // rules: {
      //   title: [
      //     { required: true, message: "请输入标题", trigger: "blur" },
      //     { min: 3, message: "请至少输入3个字", trigger: "blur" },
      //   ],
      //   desc: [
      //     { required: true, message: "请输入描述", trigger: "blur" }
      //     ],
      //   region: [
      //     { required: true, message: "请选择活动区域", trigger: "change" },
      //   ],
      //   category: [
      //     { required: true, message: "请选择类别", trigger: "change" },
      //   ],

      // },
      mode: new FormData(),
    };
  },
  methods: {
    clearAll() {
      for (var item in this.form) {
        delete this.form[item];
      }
    },
    onSubmit() {
      this.imageUpload();
      // Promise.all([this.checkValid("form")], [])
      //   .then(() => {})
      //   .catch((err) => {
      //     console.error(err);
      //   });
    },
    imageUpload() {
      return new Promise((resolve, reject) => {
        this.axios
          .post("/api/image", this.mode)
          .then((response) => {
            console.log(response);
            resolve();
          })
          .catch(function (error) {
            console.log(error);
            reject();
          });
      });
    },
    checkValid(formName) {
      var condition = false;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          condition = true;
        } else {
          this.$message.error("上传未成功");
          condition = false;
        }
      });
      return condition;
    },

    addImage(file) {
      this.file = file.file;
      // FileReader api 为用户提供了方法去读取一个文件或者一个二进制大对象，
      // 并且提供了事件模型让用户可以操作读取后的结果
      const reader = new FileReader();
      // readAsDataURL：读取为base64格式
      reader.readAsDataURL(this.file);
      // onload 在文件读取成功时触发
      reader.onload = () => {
        const ImgBase64 = reader.result;
        // 实现预览，实际是拿到图片的base64数据去挂在到图片的src上
        this.imgUrl = ImgBase64;
      };
      this.mode.append("file", this.file,this.file.name);
    },

    removeImage(file) {
      this.mode.delete("file",file.name);
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

    //canvas压缩
    handleCompressImage(img, type) {
      let reader = new FileReader();
      // 读取文件
      reader.readAsDataURL(img);
      reader.onload = function (e) {
        let image = new Image(); //新建一个img标签
        image.src = e.target.result;
        image.onload = function () {
          let canvas = document.createElement("canvas");
          let context = canvas.getContext("2d");
          // 定义 canvas 大小，也就是压缩后下载的图片大小
          let imageWidth = 300; //压缩后图片的大小
          let imageHeight = 200;
          canvas.width = imageWidth;
          canvas.height = imageHeight;
          // 图片不压缩，全部加载展示
          context.drawImage(image, 0, 0, imageWidth, imageHeight);
          return canvas.toDataURL(`image/${type}`);
        };
      };
    },
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
