import { createRouter, createWebHistory } from "vue-router";
import Employee from "../components/pages/Employee.vue";
import Order from "../components/pages/Order.vue";
import Product from "../components/pages/Product.vue";
import User from "../components/pages/User.vue";
import Visualization from "../components/pages/Visualization.vue";
import Classification from "../components/pages/Classification.vue";
/* 路由信息 */
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Product',
            path: '/Product',
            component: Product
        },
        {
            name: 'Classification',
            path: '/Classification',
            component: Classification
        },
        {
            name: 'Order',
            path: '/Order',
            component: Order
        },
        {
            name: 'User',
            path: '/User',
            component: User
        },
        {
            name: 'Employee',
            path: '/Employee',
            component: Employee
        },
        {
            name: 'Visualization',
            path: '/Visualization',
            component: Visualization
        },
        {
            path: '/',
            redirect: '/Product'
        }
    ]
});
export const routerMsg = [
    '产品管理','分类管理','订单管理','用户管理','员工管理','可视化界面'
]