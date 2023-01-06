<template>
<div class="case">
    <ul>
        
    </ul>
</div>
</template>

<script>
export default{
    name:"Case_list",
    data(){

    },
}
</script>

<style scoped lang="less">
li{
    list-style-type:none;
}
.case{
    width:70%;
    border:1px solid red;
    margin-top:20px;
    ul{
        margin:0px;
        padding:0px;
        li{
        margin-left:10px;
        border:1px solid red;

        .button{
            div{
                float:right;
                width:120px;
                height:30px;
                color:#ffff;
                border:1px solid red;
                border-radius:20px;
                margin-top:20px;

                img{
                    margin-top:5px;
                    margin-left:20px;
                }
            }
        }
    }
    .logo{
        width:80px;
        height:80px;
     
        border-radius:50px;
    }
    }
    
}
</style>