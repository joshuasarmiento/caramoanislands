import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',              name: 'home',           component: () => import('@/views/HomeView.vue') },
  { path: '/about',         name: 'about',          component: () => import('@/views/AboutView.vue') },
  { path: '/attractions',   name: 'attractions',    component: () => import('@/views/AttractionsView.vue') },
  { path: '/accommodations',name: 'accommodations', component: () => import('@/views/AccommodationsView.vue') },
  { path: '/dining',        name: 'dining',         component: () => import('@/views/DiningView.vue') },
  { path: '/how-to-get-there', name: 'how-to-get-there', component: () => import('@/views/HowToGetThereView.vue') },
  { path: '/gallery',       name: 'gallery',        component: () => import('@/views/GalleryView.vue') },
  { path: '/community',     name: 'community',      component: () => import('@/views/CommunityView.vue') },
  { path: '/contact',       name: 'contact',        component: () => import('@/views/ContactView.vue') },
  {
    path: '/tour-packages',
    name: 'tour-packages',
    component: () => import('@/views/TourPackagesView.vue')
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import('@/views/FAQsView.vue')
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import('@/views/ThankYouView.vue')
  },
  {
    path: '/attractions/:id',
    name: 'attraction-detail',
    component: () => import('@/views/AttractionDetail.vue'),
    props: true
  },
  {
    path: '/accommodations/:id',
    name: 'accommodation-detail',
    component: () => import('@/views/AccommodationDetail.vue'),
    props: true
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

export default router