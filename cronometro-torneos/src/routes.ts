import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import KatasCompetition from './views/KatasCompetition.vue'
import PointFigthCompetitionVue from './views/PointFigthCompetition.vue'

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
    },
    { 
        path: '/figth/points',
        name: 'point-figth',
        component: PointFigthCompetitionVue 
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router