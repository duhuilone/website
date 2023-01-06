<template>
<div class="home">
  <!-- 轮播图-->
  <div class="swiper">
  <span id="arrow_left">《</span>
  <span id="arrow_right">》</span>
  <div class="swiper_img">
      <img src="./images/index-banner-01.jpg" alt=""/>
      <img src="" alt=""/>
      <img src="" alt=""/>
  </div>   
  <div class="minico">
    <span>
      <img src="./images/transt1.png" alt=""/>
      <p>领免费设计方案</p>
    </span>
    <span>
       <img src="./images/transt2.png" alt=""/>
       <p>10s获取装修报价</p>
    </span>
    <span>
       <img src="./images/transt3.png" alt=""/>
       <p>看优秀设计方案</p>
    </span>
    <span>
       <img src="./images/transt4.png" alt=""/>
       <p>学装修知识</p>
    </span>
  </div>
  </div>

  <div class="nav_img">
    <div class="nav1">
      <span>看图找灵感</span>
      <p>搜索海量装修家居美图，发现新家装修灵感</p>
    </div>
    <div class="nav">
      <!--左侧导航栏 -->
      <ul>
        <li>空间 <img src="./images/tobtm_b.png" alt=""/>
        <ul>
          <li><span>客厅</span> <span>卧室</span> <span>卫生间</span> <span>餐厅</span> <span>厨房</span> <span>儿童房</span></li>
          <li><span>阳台</span> <span>书房</span></li>
        </ul>
        </li>
        <li>局部 <img src="./images/tobtm_b.png" alt=""/>
          <ul>
            <li><span>吊顶</span> <span>背景墙</span> <span>窗帘</span> <span>隔断</span> <span>飘窗</span> <span>吧台</span></li>
            <li><span>照片墙</span> <span>收纳</span></li>
          </ul>
        </li>
        <li>风格 <img src="./images/tobtm_b.png" alt=""/>
          <ul>
            <li><span>新中式</span> <span>简约</span> <span>欧式</span>  <span>田园 </span>  <span>混搭</span>  <span>地中海 </span></li>
            <li><span>美式</span> <span>日式</span> </li>
          </ul>
        </li>
        <li>户型 <img src="./images/tobtm_b.png" alt=""/>
          <ul>
            <li><span>一居</span> <span>二居</span> <span>三居</span> <span>四居</span> <span>多居</span> <span>复式</span></li>
            <li><span>公寓</span> <span>别墅</span></li>
          </ul>
        </li>
      </ul>
      <div class="nav_a">
        <span>装修图片</span> <span>装修图集</span> <span>装修案例</span>
      </div>
    </div>
     <!--中间大图 -->
     <div class="nav_img1">
        <img src="./images/index-ws1.jpg" alt=""/>
        <span>东方古典撞上现在主义，打造温馨卧室</span>
      </div>
      <!--右侧两张小图 -->
    <div class="nav_img2">
        <div>
          <img src="./images/index-ertf.jpg" alt=""/>
          <span id="text1">暖调软装搭上原木地板，温馨儿童房</span>
        </div>

        <div id="nav_imgb">
          <img src="./images/index-kt1.jpg" alt=""/>
          <span id="text2">低调奢华体验，极致感官效果</span>
        </div>
    </div>
    <div id="text3">更多灵感</div>
  </div>  
  <!--装修公司名片展示组件 -->

  <firm_list></firm_list>

 
<!-- 设计师列表展示-->
 <stylist></stylist>

<!--新闻动态-->
 <news_trends></news_trends>

 <div class="bottom" style="width:1350px;height:150px;background-color:#00CED1;color:#FFFFFF;">
  <ul>
    <li><span>10万+</span>
    <P>中国家庭</P></li>
    <li> <span>2000+</span>
    <p>合作装修公司</p></li>
    <li> <span>10000+</span>
     <p>合作设计师</p></li>
    <li><span>100+</span>
    <p>城市分站</p></li>
  </ul>
 </div>

</div>
</template>

<script>
import firm_list from "./firm_list/index.vue"
import stylist from "./stylist/index.vue"
import news_trends from "./news_trends/index.vue"

export default{
  name:"Home",
  data(){
    return{
      n:0,
    }
    } ,
  methods:{
  },
  components:{
    firm_list,
    stylist,
    news_trends,

  }

}
</script>

<style scoped lang="less">
.home{
  /* 轮播图*/
  #arrow_left{
    color:#ffff;
    font-size:20px;
    width:30px;
    height:30px;
    background-color: #A9A9A9;
    position:absolute;
    top:400px;
    left:30px;
  }
  #arrow_right{
    color:#ffff;
    font-size:20px;
    width:30px;
    height:30px;
    background-color: #A9A9A9;
    position:absolute;
    top:400px;
    right:30px;
  }
   /* 轮播图图片*/
  .swiper_img{
    img{
      width:1350px;
      margin-top:10px;
    }
  }

  .minico{
    width:1350px;
    height:150px;
 
    span{
      float:left;
      margin:0 100px;

      img{
        margin:20px;
      }
    }
  }

  li{
        list-style-type:none;
    }

   /* 左侧导航栏 */
  .nav ul li ul{
    padding:0;
  }
  .nav{
      width:300px;
      height:500px;
    

      ul{
        padding:10px;
        margin-left:20px;

        img{
          padding-left:10px;
        }

        li ul{
          margin:0px;
          margin:10px 0px;
        }
      }

      .nav_a{
        width:280px;
        height:70px;
       
        border-radius:10px;
        margin-left:10px;
        margin-top:25px;
        background-color: #696969;
        padding-top:30px;

        span{
          width:40px;
          color:#ffff;
          border:1px solid #ffff;
          border-radius:10px;
          margin-left:20px;
        }


      }
  }
  .nav_img{
    width:1350px;
    height:680px;
   
    margin-top:10px;

    .nav1{
      padding-left:500px;
      span{
        padding-left:100px;
        font-size:30px;
      }
      p{
        margin-bottom:20px;
      }
    }

    #text3{
      width:100px;
      height:30px;
      text-align:center;
      padding-top:8px;
      
      border-radius:20px;
      position:absolute;
      top:1350px;
      left:600px;
    }

    #text3:hover{
      color:#ffff;
      background-color:#FFA500;
    }
  }
   .nav_img1{
     position:relative;
     left:350px;
     bottom:505px;
      img{
        width:600px;
        height:500px;
      }
      span{
      
        color:#ffff;
        position:relative;
        right:500px;
        bottom:30px;
      }
    }
  .nav_img2 img{
    width:300px;
    height:250px;
  }
  .nav_img2{
    width:300px;
    height:510px;
  
    position:absolute;
    left:1000px;
    top:800px;

    #text1{
      color:#ffff;
      position:absolute;
      left:13px;
      top:220px;
    }
     #text2{
      color:#ffff;
      position:absolute;
      left:13px;
      top:470px;
    }

    #nav_imgb{
      margin-top:7px;
    }
  }
   
   .bottom{
    ul li{
      float:left;
      margin:40px 100px;

      span{
        font-size:30px;
      }

      p{
        margin-left:10px;
      }
    }
   }
}
</style>

