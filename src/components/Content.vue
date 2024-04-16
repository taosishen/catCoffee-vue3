<template>
  <div class="content">
    <a-spin tip="加载中..." :spinning="loginStore.isLoading" size="large"/>
    <RouterView>
    </RouterView>
  </div>
</template>

<script setup lang="ts" name="Content">
import { useLogin } from '../store/loadingStore';
let loginStore = useLogin();
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 15px;
  background-color: rgb(231, 231, 231);
  text-align: center;
}
</style>
