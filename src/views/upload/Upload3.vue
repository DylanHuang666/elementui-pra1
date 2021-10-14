<template>
  <div>
    照片墙（添加并不上传）
    <!--
      on-preview
      on-remove
      before-remove
      on-exceed  文件超出个数限制时的钩子
      auto-upload 选取后是否马上接着上传
    -->
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-change="changeHandle"
      :on-success="successHandle"
      :auto-upload="false"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
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
    changeHandle(file, fileList){
      console.log("changeHandle", file, fileList);
    },
    successHandle(res,file, fileList){
      console.log('successHandle',res,file, fileList)
    }
  }
};
</script>

<style>
</style>