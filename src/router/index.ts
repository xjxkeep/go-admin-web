// 路由配置
import {createRouter,createWebHashHistory} from 'vue-router'
import NProgress from '../config/nprogress'


const routes = [
    {
        path: '/',
        name:"Login",
        meta: {title:"后台管理系统登录"},
        component: ()=>import("../views/Login.vue")
    }

]

const router=createRouter({history:createWebHashHistory(),routes})

router.beforeEach(async (to,from,next)=>{
    // nprogress 进度条开始
    NProgress.start()
    next()
})

router.afterEach(()=>{
    // nprogress 进度条结束
    NProgress.done()
})


router.onError((error)=>{
    NProgress.done()
    console.warn(error)
})

export default router