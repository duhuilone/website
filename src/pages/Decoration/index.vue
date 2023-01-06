<template>
<div class="decoration">
    <div class="top">
    <span>首页</span><img src="" alt=""/>
    <span>长治装修公司</span><img src="" alt=""/>
    <span>共31家装修公司</span><img src="" alt=""/>
</div>

<div class="nav">
    <ul>
        <li><span>服务地区:</span><span>全部</span><span>城区</span><span>郊区</span><span>长治县</span><span>襄垣县</span>
        <span>屯留县</span><span>平顺县</span><span>黎城县</span><span>壶关县</span><span>长子县</span><span>武乡县</span><span>沁县</span>
        <span>沁源县</span><span>潞城市</span></li>
        <li><span>服务内容:</span><span>全部</span><span>小户型</span><span>公寓</span><span>别墅</span>
        <span>普通住宅</span><span>商业住宅</span></li>
        <li><span>承接价位:</span> <span>全部</span> <span>3万以下</span> <span>3~6万</span> <span>6~10万</span>
        <span>10~20万</span> <span>20~50万</span> <span>50~100万</span> <span>100万以上</span></li>
    </ul>
</div>

<div style="width:70%;height:50px;border:1px solid red;margin-top:20px;padding-top:20px;"><span style="padding-left:30px;">默认</span><span style="margin-left:10px;">案例<img style="padding-left:3px;" src="./images/tobtm2.png" alt=""/></span><span style="margin-left:10px;">工地<img  style="padding-left:3px;" src="./images/tobtm2.png" alt=""/></span></div>

<div>
    <Case_list></Case_list>
</div>
<!-- 底部页码导航-->
<div></div>
</div>

</template>

<script>
import Case_list from "./Case_list/index.vue"
export default{
    name:"Decoration",
    data(){

    },
    components:{
        Case_list,
    },
}
</script>

<style scoped lang="less">
.decoration{
    width:100%;

    .nav{
    width:70%;
    height:200px;
    border:1px solid red;
    li{
         list-style-type:none;

         span{
            margin:5px;
         }
    }
}
    
    .list{
        width:70%;
        border:1px solid red;
        margin-top:30px;
    }
}

</style>