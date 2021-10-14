<template>
  <div>
    文件缩略图（添加并不上传）
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
      :auto-upload="false"
      :on-error="errorHandle"
      :on-success="successHandle"
      :on-change="changeHandle"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
            <i class="el-icon-download"></i>
          </span>
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
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
      dialogVisible: false,
      disabled: false
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      console.log('handlePictureCardPreview',file)
      this.dialogImageUrl = file.url; //本地临时地址
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    errorHandle(err, file, fileList) {
      console.log("error", err, file, fileList);
    },
    successHandle(response, file, fileList) {
      console.log("success", response, file, fileList);
      let imageUrl = URL.createObjectURL(file.raw);
      console.log("imageUrl", imageUrl);
    },
    changeHandle(file, fileList){
      console.log("changeHandle", file, fileList);
    }
  }
};
</script>

<style>
</style>