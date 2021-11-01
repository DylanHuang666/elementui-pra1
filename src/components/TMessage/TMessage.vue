<template>
  <transition name="message-fade">
    <div
      :class="[
        'message',
        'message-' + type,
        center ? 'is-center' : ''
    ]"
      :style="{top: offset + 'px'}"
      v-if="!closed"
    >
      <p class="message-content">提示信息：{{message}}</p>
      <i class="icon icon-close"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TMessage",
  data() {
    return {
      message: "这是默认信息",
      type: "info",
      center: true,
      offset: 20,
      closed: false,
      duration: 1500,
      timer: null,
      onClose: null
    };
  },
  mounted() {
    this.timer = setTimeout(() => {
      if (!this.closed) {
        this.close();
      }
    }, this.duration);
  },
  methods: {
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/*
message
*/
.message {
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  z-index: 999999999;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
}

.message.is-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.message p {
  margin: 0;
}

.message-info .message-content {
  color: #909399;
}

.message-success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.message-success .message-content {
  color: #67c23a;
}

.message-warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.message-warning .message-content {
  color: #e6a23c;
}

.message-error {
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.message-error .message-content {
  color: #f56c6c;
}

.message-content {
  padding: 0;
  font-size: 14px;
  line-height: 1;
}

.message-content:focus {
  outline-width: 0;
}

.message .icon-close {
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  color: #c0c4cc;
  font-size: 16px;
}

.message .icon-close:focus {
  outline-width: 0;
}

.message .icon-close:hover {
  color: #909399;
}

.message-fade-enter,
.message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>