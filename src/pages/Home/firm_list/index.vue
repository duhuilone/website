<template>
 <!--公司名片展示 -->
  <div class="firm_list">
    <div class="head">
        <span style="font-size:25px;margin-left:70px;letter-spacing:10px;">找装修公司</span>
        <p style="color:#C0C0C0;">甄选优质长治装修公司，丰富选择实现理想家</p>
    </div>
    
    <div class="list">
      <ul>
        <li>
           <span class="list1_card1">
               <img src="./images/company2.png" alt=""/>
               <span id="img2">
                <img src="./images/m_5e635e4c3303e.jpg" alt=""/>
               </span>
               <div id="text1">
                <p style="margin-left:23px;font-size:20px;">乐嘉装饰</p> <p style="font-size:10px;"><span style="margin-right:10px;">案例：7</span><span>设计师：5</span></p>
                <div style="width:90px;height:30px;border:1px solid #FFA500; border-radius:20px; padding-left:20px; padding-top:5px;color:#FFA500;
                margin-top:55px;"  >免费预约</div>
               </div>
           </span>

           <span class="list1_card2">
                <img src="./images/company2.png" alt=""/>
                <span id="img_a1">
                    <img src="./images/5ee3352985d4b2.jpg" alt=""/>
                </span>
                <div style="margin:70px 0px 0px 120px;">
                    <p style="font-size:20px;margin-left:10px;">业之峰装饰</p> <p style="font-size:10px;"><span>案例：0</span> <span style="margin-left:30px;">设计师：0</span></p>
                    <div style="width:90px;height:30px;border:1px solid #FFA500; border-radius:20px; padding-left:20px; padding-top:5px;color:#FFA500;
                     margin-top:55px;margin-left:10px;"  >免费预约</div>
                </div>
           </span>
            
           <span class="list1_card3">
                <img src="./images/company2.png" alt=""/>
                <span id="img3">
                    <img src="./images/5e86ae98d68383.jpg" alt=""/>
                </span>
                <div style="margin:70px 0px 0px 120px;">
                    <p style="margin-right:40px;font-size:20px;">伊人悦居装饰</p>  <p style="font-size:10px;margin-right:20px;"><span >案例：0</span> <span style="margin-left:40px;">设计师：0</span></p>
                    <div style="width:90px;height:30px;border:1px solid #FFA500; border-radius:20px; padding-left:20px; padding-top:5px;color:#FFA500;
                margin-top:55px;margin-left:10px;"  >免费预约</div>
                </div>
           </span> 
        </li>
        <li class="list2">
            <span class="list2_card1">
               <img src="./images/company2.png" alt=""/>
               <span id="img_b1">
                <img src="./images/bzw4.jpg" alt=""/>
               </span>
               <div style="margin:70px 0 0 80px;;">
                <p style="margin-right:30px;font-size:20px;">山西杨子宜家装饰</p> <p style="font-size:10px;margin-left:20px"><span style="margin-right:10px;">案例：0</span><span>设计师：0</span></p>
                <div style="width:90px;height:30px;border:1px solid #FFA500; border-radius:20px; padding-left:20px; padding-top:5px;color:#FFA500;
                margin-top:55px;margin-left:18px;"  >免费预约</div>
               </div>
            </span>
            <span>
                <span class="list2_card2">
               <img src="./images/company2.png" alt=""/>
               <span id="img_b1">
                <img src="./images/bzw5.jpg" alt=""/>
               </span>
               <div style="margin:70px 0 0 80px;;">
                <p style="margin-left:50px;font-size:20px;">真诚装饰</p> <p style="font-size:10px;margin-left:40px"><span style="margin-right:10px;">案例：0</span><span>设计师：0</span></p>
                <div style="width:90px;height:30px;border:1px solid #FFA500; border-radius:20px; padding-left:20px; padding-top:5px;color:#FFA500;
                margin-top:55px;margin-left:38px;"  >免费预约</div>
               </div>
            </span>
            </span> 
            <span class="list2_card3">
                <img src="./images/company2.png" alt=""/>
                <span id="img4">
                    <img src="./images/bzw6.jpg" alt=""/>
                </span>
                <div style="margin:70px 0px 0px 100px;">
                    <p style="margin-right:40px;font-size:20px;">长治市汉唐装饰</p>  <p style="font-size:10px;margin-right:20px;"><span >案例：0</span> <span style="margin-left:40px;">设计师：0</span></p>
                    <div style="width:90px;height:30px;border:1px solid #FFA500; border-radius:20px; padding-left:20px; padding-top:5px;color:#FFA500;
                margin-top:55px;margin-left:10px;"  >免费预约</div>
                </div>
            </span>
        </li>
      </ul>
    </div>
    <div id="bottom_input">查看更多</div>
</div>
</template>

<script>

export default{
    name:"firm_list",
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="less">
.firm_list{
    width:1350px;
    height:1150px;

    li{
        list-style-type:none;
    }

    .head{
        margin-left:500px;
        margin-top:20px;
    }
   
   .list{
    margin-top:40px;

    li span{
        float:left;
    }
   }
   .list1_card1{
       #img2{
        width:100px;
        height:100px;
        border-radius:50px;
        background-color:#ffff;
        position:absolute;
        top:1730px;
        left:160px;

        img{
            width:80px;
            height:60px;
            margin-left:10px;
            margin-top:20px;
        }
      }
      #text1{
        margin-top:70px;
        margin-left:100px;

       
      }
   }

   .list1_card2{
          margin-left:130px;

          #img_a1{
            width:100px;
            height:100px;
            border-radius:50px;
            position:absolute;
            top:1730px;
            left:635px;

            img{
                width:100px;
                height:100px;
                border-radius:50px;
            }

          }
   }

   .list1_card3{
         margin-left:130px;

          #img3{
            width:100px;
            height:100px;
            border-radius:50px;
            position:absolute;
            top:1730px;
            left:1095px;

            img{
                width:100px;
                height:100px;
                border-radius:50px;
            }
          }
   }
   
   .list2{
    .list2_card1{

            margin-top:40px;

        #img_b1{
        width:100px;
        height:100px;
        border-radius:50px;
        background-color:#ffff;
        position:absolute;
        top:2200px;
        left:160px;

        img{
            width:80px;
            height:60px;
            margin-left:10px;
            margin-top:20px;
        }
        }
    }

     .list2_card2{

            margin-top:40px;
            margin-left:130px;

        #img_b1{
        width:100px;
        height:100px;
        border-radius:50px;
        background-color:#ffff;
        position:absolute;
        top:2200px;
        left:635px;

        img{
            width:80px;
            height:60px;
            margin-left:10px;
            margin-top:20px;
        }
        }
    }

    .list2_card3{
         margin-top:40px;
         margin-left:130px;

          #img4{
            width:100px;
            height:100px;
            border-radius:50px;
            position:absolute;
            top:2200px;
            left:1095px;

            img{
                width:100px;
                height:100px;
                border-radius:50px;
            }
          }
   }

   }
   #bottom_input{
    clear:both;
    width:100px;
    height:35px;
    border-radius:20px;
    background-color:#FFA500;
    color:#ffff;
    padding-left:30px;
    padding-top:10px;
    margin-left:615px;
    position:absolute;
    top:2500px;
   }
}
    
</style>
