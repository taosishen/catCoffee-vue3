<template>
  <div class="Sider">
    <div class="logo" :style="{ display: 'flex', justifyContent: 'center', alignContent: 'center', padding: '10px' }">
      <GithubOutlined :style="{ color: 'black', fontSize: '40px' }" />
    </div>
    <a-menu id="dddddd" v-model:selectedKeys="selectedKeys" style="width: 100%" mode="inline" :items="items"
      @click="handleClick"></a-menu>
    <p>{{ routerMsg.routerPath }}</p>
  </div>
</template>

<script setup lang="ts" name="Sider">
import { reactive, watch, h, ref, onMounted } from 'vue';
import {
  AccountBookOutlined, GithubOutlined
} from '@ant-design/icons-vue';
import { useRouterMessage } from '../store/routerMessageStroe';
import { useRoute } from 'vue-router';
const route = useRoute();
let routerMsg = useRouterMessage();
let selectedKeys = reactive([route.path]);
/* 导航列表 */
const items = reactive([
  {
    label: '产品管理',
    title: '产品管理',
    key: '/Product',
    icon: () => h(AccountBookOutlined),
  },
  {
    label: '分类管理',
    title: '分类管理',
    key: '/Classification',
    icon: () => h(AccountBookOutlined),
  },
  {
    label: '订单管理',
    title: '订单管理',
    key: '/Order',
    icon: () => h(AccountBookOutlined),
  },
  {
    label: '用户管理',
    title: '用户管理',
    key: '/User',
    icon: () => h(AccountBookOutlined),
  },
  {
    label: '员工管理',
    title: '员工管理',
    key: '/Employee',
    icon: () => h(AccountBookOutlined),
  },
  {
    label: '可视化界面',
    title: '可视化界面',
    key: '/Visualization',
    icon: () => h(AccountBookOutlined),
  }
]);
onMounted(()=>{
  routerMsg.routerPath = route.path
})
watch(route,()=>{
  selectedKeys[0] = route.path;
  routerMsg.routerPath = route.path
  console.log(selectedKeys[0]);
  
})
function handleClick(e: any) {
  routerMsg.pushRuter(e.key);
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 65px;
  background-color: white;
}
</style>
