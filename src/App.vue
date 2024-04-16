<template>
  <a-layout style="height: 100vh;">
    <a-layout-sider :style="siderStyle" collapsible><Sider/></a-layout-sider>
    <a-layout>
      <a-layout-header :style="headerStyle"><Header/></a-layout-header>
      <a-layout-content :style="contentStyle"><Content/></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts" name="App">
import {
  headerStyle,
  contentStyle,
  siderStyle,
} from './utils/style';
import Sider from './components/Sider.vue';
import Header from './components/Header.vue';
import Content from './components/Content.vue';
</script>

<style lang="scss" scoped>

</style>
