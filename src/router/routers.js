import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: "首页",
    component: () => import(/* webpackChunkName: "task"*/ '../views/task/task.vue')
  },
  {
    path: '/test',
    name: "测试",
    component: () => import(/* webpackChunkName: "task"*/ '../views/test/mainPage.vue')
  }
]
export default routes