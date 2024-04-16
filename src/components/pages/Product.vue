<template>
  <div class="product">
    <a-card hoverable style="width: 200px;margin: 15px;" v-for="item in productList">
      <template #cover>
        <img alt="example" :src="'/api/file/downloadGoods?t=' + item.image" />
      </template>
      <a-card-meta :title="item.name">
        <template #description>￥{{ item.price / 100 }}</template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script setup lang="ts" name="Product">
import { ref } from 'vue';
import { getProduct } from '../../utils/api/product';
let productList:any = ref([])
getProduct().then((res)=>{
  productList.value = res.data.records
  console.log(productList);
})
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  justify-content: flex-star;
  flex-wrap: wrap;
}
</style>
