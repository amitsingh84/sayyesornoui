// import Vue from 'vue'; 
// import Router from 'vue-router';
// import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import UserLogin from '../auth/views/UserLogin.vue'
import Login from '../auth/views/Login.vue'
import ChangePassword from '../auth/views/ChangePassword.vue'
Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        component: UserLogin
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/changepassword',
        component: ChangePassword
    }
]

const router = VueRouter.createRouter({
    routes // short for `routes: routes`
})

export default router