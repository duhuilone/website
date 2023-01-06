<template>

   <!--新闻动态组件 -->
    <div class="news">
     <div style="margin-left:500px;">
        <p style="font-size:30px;margin-left:100px;">{{firm}}</p>
        <p style="color:#A9A9A9;">{{firm1}}</p>
     </div>

     <div class="news_list">
        <span>
            <ul>
                <li class="top" style="background-color:#87CEFA;">
                    <img style="margin:20px 0px 0px 130px;" src="./images/know1.png" alt=""/>
                    <P style="color:#FFFFFF;font-size:20px;margin-left:107px;">装修百科</P>
                </li>
                <li class="imag_text">
                    <img src="./images/a1.jpg" alt=""/>
                    <p class="p1">设计好装修公司有哪些</p>
                    <p class="p2">装修房屋不但是材料选择的要好在设计方面也要独特</p>
                </li>
                <li class="list" v-for=" (list,index) in encyclopedia" :key="index">
                    {{list}}
                </li>
            </ul>
        </span>
        <span>
            <ul>
                <li class="top" style="background-color:#6495ED	;">
                     <img  style="margin:20px 0px 0px 130px;" src="./images/know2.png" alt=""/>
                     <p style="color:#FFFFFF;font-size:20px;margin-left:107px;">选材手册</p>
                </li>
                <li class="imag_text">
                    <img src="./images/a2.jpg" alt=""/>
                    <p class="p1">琪朗灯饰质量怎么样 琪</p>
                    <p class="p2">灯具的选择也是装修过程中不可缺少的，其中琪朗品牌</p>
                </li>
                <li class="list" v-for=" (list,index) in handbook" :key="index">
                    {{list}}
                </li>
            </ul>
        </span>
        <span>
            <ul>
                <li class="top" style="background-color:#F0E68C;">
                     <img style="margin:20px 0px 0px 130px;" src="./images/know3.png" alt=""/>
                     <p style="color:#FFFFFF;font-size:20px;margin-left:107px;">装修流程</p>
                </li>
                <li class="imag_text">
                    <img src="./images/a3.jpg" alt=""/>
                    <p class="p1">拒绝装修傻白甜！老司机</p>
                    <p class="p2">很多业主会发出这样的感叹：“装修完一套房子，感</p>
                </li>
                <li class="list" v-for=" (list,index) in flow" :key="index">
                    {{list}}
                </li>
            </ul>
        </span>
        <span>
            <ul>
                <li class="top" style="background-color:#87CEFA;">
                     <img style="margin:20px 0px 0px 130px;" src="./images/know4.png" alt=""/>
                     <p style="color:#FFFFFF;font-size:20px;margin-left:107px;">装修风水</p>
                </li>
                <li class="imag_text">
                    <img src="./images/a4.jpg" alt=""/>
                    <p class="p1">怎么看家里的风水 如何</p>
                    <p class="p2">关于房屋的选址和房子内部的装修，很多的朋友会依据</p>
                </li>
                <li class="list" v-for=" (list,geomancy) in encyclopedia" :key="index">
                    {{list}}
                </li>
            </ul>
        </span>
     </div>
        <div id="more" style="width:90px;height:30px;border:1px solid #D3D3D3	; border-radius:20px; padding-left:20px; padding-top:5px;
                margin-top:560px;margin-left:600px;">查看更多</div>
      
     </div>
</template>

<script>
export default{
    name:"news_trends",
    data(){
          return{
            //标题
            firm:"学装修知识",
            firm1:"学习装修经验与交流装修相关问题，小白晋级达人就靠它",

            //装修百科
            encyclopedia:[
               '智能化家居系统作用 如何选择智能家居公司',
               '洋房装修哪家好 洋房装修注意事项',
               '90平米房屋如何装修 房屋装修注意事项',
               '家具展会注意事项 家居装饰注意事项',
               '12平米小户型装修设计技巧 小户型装修设计...',
               '客厅改卧室注意事项 客厅改卧室怎么设计',
            ],

            //选材手册
            handbook:[
               '欧式门厅柜选购技巧 欧式门厅柜保养方法',
               '榆林实木地板优点 榆林家具的优缺点',
               '迦南橄榄树家具介绍 迦南橄榄树家具价格',
               '室内装修贴墙纸有那些优点 购买墙纸时的注意...',
               '塑钢型材品牌介绍 塑钢型材什么材料做的',
               '三基色灯具的特色 三基色灯具于普通灯区别',
            ],

            //装修流程
            flow:[
               '地中海风格厨房装修图片介绍 厨房装修技巧',
               '负一层装修注意事项 负一层可以做卧室吗',
               '工程木门安装方法 工程木门安装的注意事项',
               '别墅小院景观设计要点 别墅装修注意事项',
               '装修地面如何做保护 装修地面材料价格',
               '日式吊顶石膏线的步骤 吊顶石膏线的技巧',
            ],

            //装修风水
            geomancy:[
               '联排别墅风水布局 联排别墅风水禁忌',
               '家风水相关说明 家具风水摆放讲究介绍',
               '卧室的风水布局 卧室镜子的风水说明',
               '大门玄关窗户风水禁忌 大门玄关适合摆放什么',
               '玄关装修风水 玄关装饰要求有哪些',
               '进门玄关装修效果图 玄关装修注意事项',
            ]
          }
    }
}
</script>

<style scoped lang="less">
.news{
    width:1350px;
    height:750px;

    .news_list{
        span{
            float:left;
            margin:10px;
            width:310px;
            height:500px;

            ul {
                margin:0px;
                padding:0px;
            }
        }
       
        li{
        list-style-type:none;
         }
        .top{
            margin:0px;
            padding:0px;
            width:310px;
            height:130px;
        }

        .imag_text{
            width:310px;
            height:100px;

            img{
                width:70px;
                height:60px;
                margin:22px 0px 0px 15px;
            }

            .p1{
               margin-left:100px;
               position:relative;
               bottom:80px;
            }
            .p2{
               margin-left:100px;
               position:relative;
               bottom:90px;
               font-size:15px;
               color:#A9A9A9;
            }
        }

        .list{
            font-size:14px;
            margin-top:20px;
            margin-left:8px;
            color:#404040;
        }

        
      #more:hover{
         color:aliceblue;
         background-color:#FFA500;
      }
        }
    }

</style>