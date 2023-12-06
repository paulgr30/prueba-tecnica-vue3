import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/brands',
      name: 'brand',
      component: () => import('../views/brands/BrandList.vue')
    },
    {
      path: '/products',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/products/ProductList.vue')
    }
  ]
})

export default router
