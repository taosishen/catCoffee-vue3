<template>
  <div :style="{ display: 'flex', justifyContent: 'flex-start', columnGap: '10px', marginLeft: '15px' }">
    <a-select ref="select" v-model:value="classCheck" style="width: 120px" @focus="focus" @change="handleChange">
      <a-select-option value="全部">全部</a-select-option>
      <a-select-option v-for="item in classList" :value="item.id">{{ item.name }}</a-select-option>
    </a-select>
    <a-input-search v-model:value="selectName" placeholder="输入产品名称" style="width: 200px" @search="onSearch" />
    <a-button type="primary" :icon="h(PlusOutlined)" @click="addProduct()">添加</a-button>
  </div>
  <div class="product">
    <a-card hoverable style="width: 170px;margin: 15px;" v-for="item in productList">
      <template #cover>
        <a-image alt="example" :src="'/api/file/downloadGoods?t=' + item.image" height="120px" />
      </template>
      <a-card-meta :title="item.name">
        <template #description>￥{{ (item.price / 100).toFixed(2) }}</template>
      </a-card-meta>
      <template #actions>
        <edit-outlined key="edit" @click="changeProduct(item)" />
        <DeleteOutlined key="delete" @click="deletProduct(item.id)" />
      </template>
    </a-card>
  </div>
  <a-modal v-model:open="open" :title="isChange ? '修改产品' : '添加产品'" @ok="handleOk" cancelText="取消"
    :okText="isChange ? '修改' : '添加'">
    <a-form :label-col="{ style: { width: '80px' } }" :model="fromDate">
      <a-form-item label="产品图片" style="margin-top: 30px;">
        <a-upload name="avatar" list-type="picture-card" class="avatar-uploader" :show-upload-list="false" :action= "`${VITE_BASE_URL}/file/downloadGoods/uploadGoods`"
          :before-upload="beforeUpload" @change="fileHandleChange">
          <img v-if="fromDate.image" :src="`${VITE_BASE_URL}/file/downloadGoods?t=${fromDate.image}`" alt="cover" width="100%"
            height="100%" style="border-radius: 8%;"/>
          <div v-else>
            <plus-outlined></plus-outlined>
            <div class="ant-upload-text">上传照片</div>
          </div>
        </a-upload>
      </a-form-item>
      <a-form-item label="产品名称">
        <a-input v-model:value="fromDate.name" autocapitalize="产品名称" />
      </a-form-item>
      <a-form-item label="商品码">
        <a-input-number v-model:value="fromDate.code" autocapitalize="产品名称" />
      </a-form-item>
      <a-form-item label="分类名称">
        <a-select ref="select" v-model:value="fromDate.categoryId" style="width: 120px" @focus="focus"
          @change="handleChange">
          <a-select-option v-for="item in classList" :value="item.id">{{ item.name }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="价格">
        <a-input-number v-model:value="fromDate.price" addon-before="￥（分）" />
      </a-form-item>
      <a-form-item label="启用状态">
        <a-switch :checked="fromDate.status == 1" @change="statusChange" checked-children="开" un-checked-children="关" />
      </a-form-item>
      <a-form-item label="排序">
        <a-input v-model:value="fromDate.sort" autocapitalize="产品名称" />
      </a-form-item>
      <a-form-item label="描述">
        <a-textarea v-model:value="fromDate.description" autocapitalize="产品名称" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts" name="Product">
import { Ref, reactive, ref, toRef, toRefs } from 'vue';
import { h } from 'vue'
import { getProduct, getClass, searchGood, searchGoodByClass, getGoodById } from '../../utils/api/product';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons-vue';
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
let productList: Ref = ref([])//产品列表
let classList: Ref = ref([])//分类列表
let classCheck: Ref = ref('全部')//选中的分类筛选
let selectName: Ref = ref('');//搜索框内容
let open: Ref = ref(true);//modal窗体状态
let isChange: Ref = ref(true);//modal是否为修改
let fromDate: any = ref({//modal内部数据(修改和添加)
  categoryId: "",
  code: "",
  createTime: "",
  description: null,
  id: "",
  image: "",
  name: "",
  price: 0,
  sort: 0,
  status: false,
  updateTime: "",
})

/* 请求 */
// 获取商品
getProduct().then((res) => {
  productList.value = res.data.records
})
//获取类
getClass().then((res) => {
  classList.value = res.data
})
//搜索方法
const search = (name: string) => {
  searchGood(name).then((res: any) => {
    productList.value = res.data.records;
  })
}
//分类方法
const searchByClass = (categoryId: string) => {
  searchGoodByClass(categoryId).then((res: any) => {
    // console.log(categoryId,res);
    productList.value = res.data.records;
  })
}
// 上传图片方法
const beforeUpload = () => {

}
// 上传状态改变方法
const fileHandleChange = () => {

}

/* 事件 */
/* 分类多选框事件 */
const focus = () => {
  console.log('focus');
};
const handleChange = (value: string) => {
  // console.log(`selected ${value}`);
  searchByClass(value);
};
const onSearch = (searchValue: string) => {
  // console.log('use value', searchValue);
  // console.log('or use this.value', selectName.value);
  search(searchValue)
};
// 弹窗OK事件
const handleOk = () => {
  if (isChange.value) {
    // 当前为修改状态
    
  }else{
    // 当前为添加状态
    
  }
}

// 点击修改方法
const changeProduct = (item: any) => {
  item.status = item.status == 1
  fromDate.value = item
  console.log(item);
  isChange.value = true;
  open.value = true;
}
// 修改产品中修改状态时的回调函数
const statusChange = (checked: boolean) => {
  console.log(checked);
  fromDate.value.status = !fromDate.value.status
}
//点击添加方法
const addProduct = () => {
  fromDate.value = {//modal内部数据初始化
    categoryId: "",
    code: "",
    createTime: "",
    description: null,
    id: "",
    image: "",
    name: "",
    price: 0,
    sort: 0,
    status: false,
    updateTime: "",
  };
  isChange.value = false;
  open.value = true;
}
// 点击删除方法
const deletProduct = (id: string) => {
  console.log('删除', id);
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  justify-content: flex-star;
  flex-wrap: wrap;
}
</style>
