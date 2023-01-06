<template>
 <div class="footer">
    <div class="footerItem">
        <div class="footerItemCon">
            <h4>关于我们</h4>
            <ul class="footertlist">
                <li>关于我们</li>
                <li>联系我们</li>
                <li>招贤纳士</li>
                <li>商务合作</li>
            </ul>
        </div>
        <div class="footerItemCon">
            <h4>新手上路</h4>
            <ul class="footertlist">
                <li>免费注册</li>
                <li>免费设计</li>
                <li>免费报价</li>
                <li>装修攻略</li>
            </ul>
        </div>
        <div class="footerItemCon">
            <h4>帮助中心</h4>
            <ul class="footertlist">
                <li>忘记密码</li>
                <li>侵权投诉</li>
                <li>法律声明</li>
                <li>装修问答</li>
            </ul>
        </div>
        <div class="footerItemCon">
            <h4>热门装修网</h4>
            <ul class="footertlist">
               <li><span>广州装修网</span><span>杭州装修网</span><span>济南装修网</span><span>武汉装修网</span><span>西安装修网</span><span>南昌装修网</span></li> 
               <li><span>北京装修网</span><span>无锡装修网</span><span>长沙装修网</span><span>成都装修网</span><span>深圳装修网</span><span>郑州装修网</span></li>
               <li><span>南京装修网</span><span>昆明装修网</span><span>大连装修网</span><span>烟台装修网</span><span>常州装修网</span><span>贵阳装修网</span></li>
               <li><span>天津装修网</span><span>苏州装修网</span><span>合肥装修网</span><span>重庆装修网</span><span>沈阳装修网</span><span>青岛装修网</span></li>
            </ul>
        </div>
        <div class="weixin">
            <img id="weixin" src="./images/wexin.jpg"  alt=""/>
            <p>关注公众号</p>
        </div>
        <div class="banquan">
            <div class="banquanlist">
            <p>免责声明：本网站部分内容由用户自行上传，如权利人发现存在误传其作品情形，请及时与本站联系。家空间 保留所有权利</p>
            <p>Copyright © 2021 济南先合网络科技有限公司 jkongjian.com All Rights Reserved. 备案号：鲁ICP备2021003960号-1</p>
            </div>
            <div class="banquanlist2">
               <ul>
                <li><img src="./images/footericon1.png" alt=""><span id="call">400-926-0899</span></li>
                <li><img src="./images/footericon2.png" alt=""/><span>在线咨询8:30-18:00</span></li>
                <li><img src="./images/footericon3.png" alt=""/><span>山西省长治市壶关县</span></li>
               </ul> 
            </div>
        </div>
        
    </div>
    
 </div>
</template>

<script>

export default {
name:'Footer',
data(){

}
}
</script>

<style scoped lang="less">
.footer{
    width:1355px;
    height:400px;
    background-color:#191a1a;
    
    .footerItem{
        position:absolute;
        right:156px;

    }
    
    .footerItemCon h4{
        color:#FFFFFF	;
    }

    .footertlist{
        color:#A9A9A9;
        margin:0px;
        padding:0px;
    }
    .footertlist li{
        margin-bottom:10px;
    }

   
    .footerItemCon{
        float:left;
        margin:30px;
    }

    li{
        list-style-type:none;
    }
    
    .footer_list{
        margin:0px;
        padding:0px;
    }

    .footertlist span{
        margin-right: 20px;
        margin-bottom:10px;
    }
    
    .weixin{
        margin-top:90px;
        position:absolute;
        right:0px;
        p{
            color:#A9A9A9;
            font-size:10px;
            text-align:center;
        }
    }
    #weixin{
        width:100px;
        height:100px;
    }


    .banquan div{
        float:left;
        
    }

    .banquanlist{
        color:#A9A9A9;
        clear:both;
        left:10px;
        font-size:5px;
        margin-left:40px;
        margin-top:40px;
    }
    
    .banquanlist2{
        margin-left:900px;
        margin-bottom:200px;
    }
   

    .banquanlist2 ul{
         color:#A9A9A9;
         margin:5px 0px;
         margin-left:40px;
         position:relative;
         bottom:50px;
         
    }

     .banquanlist2 ul li{
        margin:5px 0px;
     }

     .banquanlist2 span{
        margin-left:15px;
        font-size:10px;
     }

     #call{
        color:#FFFFFF;
        font-size:20px;
     }

}
</style>
