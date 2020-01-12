import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import ScheduleSelect from '@/components/workflow/ScheduleSelect.vue';
import PersonalData from '@/components/workflow/PersonalData.vue';
import {RouteNames} from '@/router/types';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: RouteNames.ScheduleSelect,
        component: ScheduleSelect,
        meta: {
          page: 0,
        },
      },
      {
        path: '/data',
        name: RouteNames.PersonalData,
        component: PersonalData,
        meta: {
          page: 1,
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
