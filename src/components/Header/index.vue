<template>
<div class="header">
  <div class="headerItem">
   <ul class="headerlist">
    <li>登入<em>/</em>注册 <span>|</span>
      <ul class="enter">
        <li><router-link to="/login">商家入口</router-link></li>
        <li><router-link to="/register">业主入口</router-link></li>
      </ul>
    </li>
     <li>公众号<span>|</span>
      <ul class="weixin">
        <li> <img id="wexin1" src="./images/wexin.jpg" alt="" />
        <p>关注公众号</p></li>
      </ul>
     </li>
      <li>商业合作<span>|</span></li>
      <li>咨询热线：400-926-0899</li>
   </ul>
  </div>
</div>
</template>

<script>
 export default{
   name:'Headers',
   data(){
    return{
      
    }
   },
   methods:{}
 }
</script>

<style scoped lang="less">
/* 顶部样式*/
.header{
  width:1350px;
  height:50px;
  background-color:#06068a;

  a{
    text-decoration:none;
  }
  
  li{
    list-style-type:none;
  }

  .headerItem {
    float:right;
  }

  .headerlist li{
    float:left;
    margin:3px;
    color:#FFFFFF;
    font-size:5px;

    span{
    padding:5px;
    margin:5px;
      
    }
   }
   

   

  .headerlist li ul{
    display: none;
  }

  .headerlist li:hover ul{
    display: block;
  }

  .weixin{
    position:absolute;
    right:215px;
  }
  #wexin1{
    width:50px;
    height:50px;
  }

   .headerlist li ul li{
    float:none;
    color:#000000;
    padding-top:10px;
   }
   .enter{
    width:60px;
    height:70px;
    background-color:#FFFFFF;
    padding:2px;
   }
   
   .headerlist li ul{
    padding:0;
    margin:0;

   }
  }
</style>