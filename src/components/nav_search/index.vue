<template>
    <div class="nav_search">
        <img id="logo" src="./images/logo_org.png" alt=""/>
        <span class="city">
            <img  class="city_ico" src="./images/load.png" alt=""/>
            <span><span @click="city_address" id="city_text">长治</span>  <img class="city_ico" src="./images/btm_y.png" alt=""/>
                 <div id="a">
                    <div class="city_nav">
                   
                <h4>热门城市</h4>
                <ul>
                    <li><span>北京</span><span>天津</span><span>广州</span><span>深圳</span><span>杭州</span></li>
                    <li><span>济南</span><span>南京</span><span>青岛</span><span>武汉</span><span>重庆</span></li>
                    <li><span>郑州</span><span>昆明</span><span>宁波</span><span>南昌</span><span>无锡</span></li>
                    <li><span>合肥</span><span>苏州</span><span>贵阳</span><span>兰州</span><span>沈阳</span></li>
                </ul>
                <div @click="more" id="more">更多城市 <span>></span> <span>></span></div>
                </div>
                 </div>
                
            </span>
           
        </span>
        <span class="nav_bar">
            <ul class="nav_a">
                <li @click="home">首页 </li>
                <li @click="decoration">装修公司 </li>
                <li>设计师 </li>
                <li>效果图 <img class="nav_ico" src="./images/tobtm_y.png" alt=""/>
                <div>
                    <div id="nav_b">
                         <ul id="nav_a1">
                             <li><router-link to="">装修美图</router-link></li>
                             <li><router-link to="">家居图册</router-link></li>
                             <li><router-link to="">本地案例</router-link></li>
                         </ul>
                    </div>
                   
                </div>
                
                </li>
                <li>学装修知识 </li>
                <li>装修社区 <img class="nav_ico" src="./images/tobtm_y.png" alt=""/>
                <div>
                    <div id="nav_b1">
                        <ul id="nav_a2">
                    <li><router-link to="">问吧</router-link></li>
                    <li><router-link to="">装修福利</router-link></li>
                    <li><router-link to="">户型改造</router-link></li>
                    <li><router-link to="">案例工地</router-link></li>
                    <li><router-link to="">我家装修</router-link></li>
                    <li><router-link to="">好物分享</router-link></li>
                </ul>
                    </div>
                    
                </div>
                
                </li>
                <li>设计报价<img class="nav_ico"  src="./images/tobtm_y.png" alt=""/>
                <img  id="headertips" src="./images/headertips.png" alt=""/> 
                    <div>
                        <div id="nav_b2">
                            <ul id="nav_a3">
                            <li><router-link to="">在线报价</router-link></li>
                            <li><router-link to="">免费设计</router-link></li>
                        </ul> 
                        </div>
                        
                    </div>
                    
                </li>
            </ul>
        </span>
        <span class="search">
            <span class="search_a">
                <span class="search_b">装修公司 <img src="./images/btm_y.png" alt=""/>
                <div id="search_b1">
                     <ul>
                <li><router-link to="">装修美图</router-link></li>
                <li><router-link to="">装修公司</router-link></li>
                <li><router-link to="">小区案例</router-link></li>
                <li><router-link to="">装修问答</router-link></li>
                <li><router-link to="">装修知识</router-link></li>
                <li><router-link to="">装修社区</router-link></li>
            </ul>
                </div>
           
             </span> 
            <input type="text" value="请输入公司名称或关键字"/>
            <img @click="serch" src="./images/search.png" alt=""/>
            </span>
            
        </span>
    </div>
</template>

<script>
 export default{
   name:'nav_search',
   data(){
    return{
      
    }
   },
   methods:{
    more(){

    },
    search(){
        
    },

    //跳转到装修公司页面
    decoration(){
        this.$router.push('/decoration')
    },

    //跳转到主页
    home(){
        this.$router.push('/home')
    },
   }
 }
</script>

<style scoped lang="less">
.nav_search{
    
       a{
        text-decoration: none;
        color:#050516;
    }

    width:1350px;
    height:100px;
    background-color:#06068a;
    border-top:0.5px solid #FFFFFF;

     /*二级导航栏隐藏 */
    .nav_a li ul{ 
        display:none;
    }

   
    .search ul,.city_nav{
        display:none;
    }
    
    /*二级导航栏显示 */
     .city span:hover .city_nav {
        display:block;
    }

    .nav_a li:hover ul{
        display:block;
    }

    .search_a span:hover ul{
        display:block;
    }

    #city_text,.city_ico{
        color:#DAA520;
    }

    #logo{
        width:130px;
        height:50px;
        margin-top:20px;
    }
    .city{
        margin-left:15px;
        position:absolute;
        top:95px;

          #a{
                width:200px;
                height:20px;
                margin:0px;
                position:absolute;
                right:0.1px;
            }

        .city_ico,.city_text{
            margin:0px 10px;
        }
        .city_nav{
            width:230px;
            height:280px;
            font-size:10px;
            background-color:#FFFFFF;
            margin-top:20px;

          
            

            h4{
               padding-top:20px;
               margin-left:30px;
               
            }

            ul{
                margin:0px;
                padding:0px;

                li{
                    padding:10px;
                    margin-left:20px;
                    span{
                        margin-right:10px;
                    }
                }
            }

            #more{
                width:100px;
                height:30px;
                background-color:#06068a;
                color:#FFFFFF;
                padding-left:10px;
                padding-top:10px;
                margin-top:20px;
                margin-left:50px;
                font-size:15px;
            }
        }
    }
    li{
        list-style-type:none;
    }

    /* 导航栏*/
    .nav_a{
        margin-top:20px;

        div{
            margin-top:-1px;

            #nav_b{
                width:50px;
                height:20px;
            }

            #nav_b1{
                width:50px;
                height:20px;
            }

            #nav_b2{
                width:50px;
                height:20px;
            }

            #nav_a1{
            width:100px;
            height:150px;
            background-color:#FFFFFF;
            margin:10px;
            position:absolute;
            left:270px;
            color:#050516;

          
            
         li{
             color:#050516;
             margin-left:18px;
         }
        }

        #nav_a2{
            width:100px;
            height:320px;
            background-color:#FFFFFF;
            margin:10px;
            position:absolute;
            left:480px;
            color:#050516;
            
            li:first-child{
                margin-left:33px;
            }
            li{
             color:#050516;
             margin-left:18px;
         }
        }
        #nav_a3{
            width:100px;
            height:80px;
            background-color:#FFFFFF;
            margin:10px;
            position:absolute;
            left:590px;
            color:#050516;

            li{
                color:#050516;
                margin-left:18px;
            }
        }
        }

        
    }
    .nav_a li{
        float:left;
        margin:16px;
        color:#FFFFFF;
    }

    .nav_a li ul{
        padding:0;

        li{
            margin:10px;
        }
    }

   
    #headertips{
        position:absolute;
        top:23px;
        left:670px;
    }
    .nav_bar{
        position:absolute;
        left:250px;
    }
    
    /* 搜索框*/
    .search{
         width:320px;
         height:35px;
         margin-top:28px;
         border:1px solid #FFFFFF;
         position:absolute;
         right:20px;
         text-align:center;


    }

   
    }
    
    .search_a{
        span{
            color:#DAA520;
            margin-right:20px;
        }

        input{
            height:20px;
            margin-top:5px;
            border:none;
            border-left:1px solid #FFFFFF;
            background-color:#06068a;
        }

        input:focus{
            border:none;
            border-left:1px solid #FFFFFF;
            outline:none;
        }
    }

    /*清除二级导航栏的浮动 */
     .nav_a li ul li{
       clear:both;
    }
    
    .search_b{
        padding:0;
        margin:0;
    }
     #search_b1{
        width:95px;
        height:20px;
        position:absolute;
        right:220px;
        color:#050516;
    }
    .search_b ul{
        padding:0;
        width:100px;
        height:220px;
        background-color:#FFFFFF;

 

        li{
            color:#050516;
            margin:10px;
        }

     
    }
    
</style>