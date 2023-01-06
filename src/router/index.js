//路由配置的地方
import {createRouter, createWebHistory} from 'vue-router';
 
const routerHistory = createWebHistory()
 
//引入路由组件
import Home from '@/pages/Home/index.vue';
import Login from '@/pages/Login';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Decoration from '@/pages/Decoration';

const router= createRouter({
    history: routerHistory,
    //配置路由
    routes:[

        //默认打开页面
        {
            path:'/',
            
            //redirect 是重新定向
            redirect:'/home'
            },
        {
        path:'/home',
        component:Home,
        meta:{show:true}
        },
        
        {
            path:'/decoration',
            component:Decoration,
        }
    ]
       
});

export default router;


