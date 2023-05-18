import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'



Vue.use(VueRouter)

const routes = [
 {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/products/:id',
    name: 'ProductDetailPage',
    component: ProductDetailPage
  },
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
  
  
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
