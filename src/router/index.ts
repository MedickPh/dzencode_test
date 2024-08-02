import { createRouter, createWebHistory } from 'vue-router'
import OrdersPage from '../views/OrdersPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ErrorPage from '../views/ErrorPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/orders'
        },
        {
            path: '/orders',
            name: 'Orders',
            component: OrdersPage
        },
        {
            path: '/products',
            name: 'Products',
            component: ProductsPage
        },
        {
            path: '/groups',
            name: 'Groups',
            component: ErrorPage
        },
        {
            path: '/users',
            name: 'Users',
            component: ErrorPage
        },
        {
            path: '/settings',
            name: 'Settings',
            component: ErrorPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'Error',
            component: NotFoundPage
        }
    ]
})

export default router
