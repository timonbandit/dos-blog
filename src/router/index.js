import Vue from 'vue';
import VueRouter from 'vue-router';
import Posts from '../components/Posts.vue';
import PostView from '../components/PostView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/post/:id',
    name: 'PostView',
    component: PostView
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});


export default router;
