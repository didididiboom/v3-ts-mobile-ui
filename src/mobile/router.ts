import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const pagesRouter: Array<RouteRecordRaw> = [];

const modulesPage = import.meta.glob('/src/packages/**/demo.vue');
for (const module in modulesPage) {
  const name = (/packages\/(.*)\/demo.vue/.exec(module) as any[])[1];
  pagesRouter.push({
    path: `/${name}`,
    component: modulesPage[module],
    name
  });
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: () => import('./views/home/index.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('./views/layout/index.vue'),
    children: pagesRouter
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (window) {
    document.title = String(to.name);
  }
  next();
});

export default router;
