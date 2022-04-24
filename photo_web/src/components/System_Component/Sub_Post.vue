<template>
  <div>
    <el-card shadow="always" class="poster_box" style="border-radius: 1.5ch">
      <h2>上传照片</h2>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
      <el-form ref="form" :model="form" label-width="80px">
        <!-- 地区 -->
        <h3>选择地区</h3>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <!-- 类别 -->
        <h3>选择类别</h3>
        <el-form-item label="类别">
          <el-select
            v-model="form.category"
            placeholder="请选择出售的类别"
            :change="Is_car(form.category)"
          >
            <el-option label="汽车" value="汽车"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <!-- 如果是汽车的类目 -->
        <div v-if="form.category == '汽车'">
          <el-form-item >
          <el-switch
    v-model="form.lease"
    size="large"
    active-text="转lease"
    inactive-text="二手车"
  />
          </el-form-item>
          <el-form-item label="车型">
            <el-input v-model="form.name" />
          </el-form-item>

          <el-form-item label="几几年款">
            <el-select
              v-model="form.offset"
              placeholder="2020年款"
              :change="Is_car(form.category)"
            >
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
            <el-input v-model="form.name" />
          </el-form-item>
        </div>

        <el-form-item label="信息描述">
          <el-input v-model="form.desc" type="textarea"  show-word-limit maxlength="500" :autosize='true'
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        lease: false,
        region: "",
        category: "",
        offset: 0,
        desc: "",
      },
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    Is_car(element) {
      if (element != "") {
        console.log(element);
      }
    },
    onSubmit(){
      console.log(this.form);
    }
  },
};
</script>

<style lang="less" scoped>
.poster_box {
  border-radius: 1.5ch;
  margin: 1.5ch 1ch;
  max-width: 100ch;
  width:80ch;
  min-width: 90%;
}
</style>
