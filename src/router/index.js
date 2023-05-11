import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    alias: ['/accueil', '/home']
  },
  {
    path: '/primeur',
    name: 'primeur',
    component: () => import('../views/PrimeurView.vue'),
  },
  {
    path: '/adresse',
    name: 'adresse',
    component: () => import('../views/AdresseView.vue'),
  },
  {
    path: '/personnes',
    name: 'personnes',
    component: () => import('../views/PersonneView.vue'),
  },
  {
    path: '/persons',
    redirect: '/personnes'
  },
  {
    path: '/personnes/:id',
    name: 'personne',
    component: () => import('../views/PersonneDetailsView.vue'),
  },
  {
    path: '/calcul/:op',
    name: 'calcul',
    component: () => import('../views/CalculView.vue'),
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('../views/ReactiveValueView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/:pathMatch(.*)',
    name: 'notfound',
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
