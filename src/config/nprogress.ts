import NProgress from 'nprogress'

import 'nprogress/nprogress.css'


NProgress.configure({ 
    easing:'ease' , // 动画方式
    speed:500,
    showSpinner:true, // 显示加载icon
    trickleSpeed:200, // 自动递增间隔
    minimum:0.3, // 最小百分比

})


export default NProgress;