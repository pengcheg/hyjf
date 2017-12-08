import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Index', component: resolve => require(['../pages/index/Index.vue'], resolve)},
    {path: '/invest', name: 'Invest', component: resolve => require(['../pages/invest/InvestList.vue'], resolve)},
    {path: '/investDetail', name: 'InvestDetail', component: resolve => require(['../pages/invest/InvestDetail.vue'], resolve)},
    {path: '/find', name: 'Find', component: resolve => require(['../pages/find/find.vue'], resolve)},
    {path: '/mine', name: 'Mine', component: resolve => require(['../pages/mine/mine.vue'], resolve)},
    {path: '/userCenter', name: 'UserCenter', component: resolve => require(['../pages/mine/UserCenter.vue'], resolve)},
    {path: '/login', name: 'Login', component: resolve => require(['../pages/mine/Login.vue'], resolve)},
    {path: '/register', name: 'Register', component: resolve => require(['../pages/mine/Register.vue'], resolve)}
  ],

});

router.beforeEach((to, from, next) => {
  let toName = to.name;
  switch (toName) {
    case 'Index':
      localStorage.setItem('selected', 0);
      break;
    case 'Invest':
      localStorage.setItem('selected', 1);
      break;
    case 'Find':
      localStorage.setItem('selected', 2);
      break;
    case 'Mine':
      localStorage.setItem('selected', 3);
      break;
    default:
      break;
  }
  next()
})

export default router
