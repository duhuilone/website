//对于axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";

import store from '@/store';
let requests=axios.create({
    //基础路径
    baseUrl:"/api",
    //链接请求超时时间
    timeout:5000,
});