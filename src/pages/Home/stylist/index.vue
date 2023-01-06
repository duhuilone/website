<template>
<!-- 设计师列表组件-->
    <div class="stylist">
         <span style="position:relative;left:500px;top:10px;">
            <p style="font-size:25px;color:#000000;margin-left:100px;">找设计师</p> 
            <p style="font-size:15px;color:#A9A9A9;">专业设计各种户型，一对一服务精准满足你的各种需求</p>
         </span>
         <div  class="list">
            <span class="nav">
                <ul>
                    <li>擅长风格 <img style="margin-left:5px;" src="./images/tobtm_b.png" alt="" />
                       <ul>
                        <li><span>现代简约</span> <span> 恬淡田园</span> <span>新中式</span> <span>欧式古典</span></li>
                        <li><span>美式</span> <span>地中海</span> <span>东南亚</span> <span>日式</span> <span>时尚混搭</span></li>
                       </ul>
                    </li>
                    <li>从业时间 <img style="margin-left:5px;" src="./images/tobtm_b.png" alt="" />
                       <ul>
                        <li><span>一年</span> <span>两年</span> <span>三年~五年</span> <span>五年~八年</span></li>
                        <li><span>八年~十年</span> <span>十年以上</span></li>
                       </ul>
                    </li>
                    <li>设计费用 <img style="margin-left:5px;" src="./images/tobtm_b.png" alt="" />
                        <ul>
                            <li><span>面议</span> <span>20元以下/m²</span> <span>20~40元/m²</span></li>
                            <li><span>40~60元/m²</span> <span>60~80元/m²</span> <span>80~100元/m²</span></li>
                        </ul>
                    </li>
                </ul>
            </span>

         <span class="name_list">
                <ul>
                    <li><span><img src="./images/sdefault.jpg" alt=""/> <p>马老师</p></span>
                        <span style="margin-left:20px;"><img src="./images/sdefault.jpg" alt=""/> <p>张老师</p></span> 
                        <span style="margin-left:20px;"><img src="./images/sdefault.jpg" alt=""/> <p>代老师</p></span>
                        <span style="margin-left:20px;"><img src="./images/sdefault.jpg" alt=""/> <p>张老师</p></span> 
                        <span style="margin-left:20px;"><img src="./images/sdefault.jpg" alt=""/> <p>王老师</p></span></li>
                    <li style="position:absolute;top:180px;">
                        <span><img src="./images/m_5f0d0d9f657cd.png" alt=""/> <p>马老师</p></span></li>
                </ul>
         </span>

        <span class="img1">
            <img src="./images/design.png" alt=""/>
        </span>
        <div id="more" style="width:90px;height:30px;border:1px solid #D3D3D3	; border-radius:20px; padding-left:20px; padding-top:5px;
                margin-top:500px;margin-left:600px;">查看更多</div>
         </div>
    </div>
</template>

<script>
export default{
    name:"stylist",
    data(){

    }
}
</script>

<style scoped lang="less">
.stylist{
    width:1350px;
    height:630px;

    li{
        list-style-type:none;
    }

    .nav{
        position:absolute;
        top:2710px;
    }
     
    ul li{
       margin-top:20px;
       color:#000000;
    }
    ul li ul{
    padding:0px;

    li{
        font-size:15px;
        color:#808080;
    }
    }
    .name_list{
        position:absolute;
        top:2700px;
        left:350px;

        img{
            width:100px;
            height:100px;
            border-radius:50px;
        }

        ul li {

            span:hover img{
                border:1px solid #FFA500;
            }
            span{
            float:left;
            

             
            p{
                margin-left:25px;
            }
           
        }
        }
    }

    .img1{
        margin-left:1000px;
        position:absolute;
        top:2710px;
    }

    #more:hover{
         color:aliceblue;
         background-color:#FFA500;
    }
}
</style>