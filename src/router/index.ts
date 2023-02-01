import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const pagesRouter: Array<RouteRecordRaw> = [];
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: () => import('@/views/home/index.vue'),
    redirect: 'introduce'
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    children: pagesRouter
  }
];

const modulesPage = import.meta.glob('/src/packages/**/index.md');
for (const module in modulesPage) {
  const name = (/packages\/(.*)\/index.md/.exec(module) as any[])[1];
  pagesRouter.push({
    path: '/' + name,
    component: modulesPage[module],
    name
  });
}

const pages = import.meta.glob('/src/views/**/index.md');
for (const module in pages) {
  const name = (/views\/(.*)\/index.md/.exec(module) as any[])[1];
  pagesRouter.push({
    path: '/' + name,
    component: pages[module],
    name
  });
}

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
