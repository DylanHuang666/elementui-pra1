<template>
  <div>
    <!--
      on-preview
      on-remove
      before-remove
      on-exceed  文件超出个数限制时的钩子
    -->
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :auto-upload="false"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :on-error="errorHandle"
      :on-success="successHandle"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      //file刪除的文件  fileList刪除后的文件列表数据
      console.log("handleRemove", file, fileList);
    },
    handlePreview(file) {
      console.log("handlePreview", file);
    },
    handleExceed(files, fileList) {
      console.log("handleExceed", files, fileList);
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      console.log("beforeRemove", file, fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    errorHandle(err, file, fileList) {
      console.log("error", err, file, fileList);
    },
    successHandle(response, file, fileList) {
      console.log("success", response, file, fileList);
      let imageUrl = URL.createObjectURL(file.raw);
      console.log("imageUrl", imageUrl);
    }
  }
};
</script>

<style>
</style>