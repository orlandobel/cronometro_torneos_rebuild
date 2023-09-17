import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import KatasCompetition from './views/KatasCompetition.vue'

const routes = [
    { 
        path: '/',
        name: 'home',
        component: Home 
    },
    { 
        path: '/katas',
        name: 'kata-comp',
        component: KatasCompetition 
    } 
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router