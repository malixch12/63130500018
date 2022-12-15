import { createRouter, createWebHistory } from 'vue-router'
import home from "../view/home.vue";
import productView from "../view/productView.vue";
import purchaseView from "../view/purchaseView.vue";
import queryView from "../view/queryView.vue";

const history = createWebHistory("/a/");
const routes = [
 {
    path:"/",
    name:"home",
    component: home
 },
 {
    path:"/product",
    name:"productView",
    component: productView
 },
 {
    path:"/purchase",
    name:"purchaseView",
    component: purchaseView
 },
 {
    path:"/query",
    name:"queryView",
    component: queryView
 },
]

const router = createRouter({history,routes});
export default router;