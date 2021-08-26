<template>
  <ul class="container" v-if="setting">
    <li>
        <Icon type="github"/>
        <a :href="setting.github">{{setting.githubName}}</a>
    </li> 
    <li>
        <Icon type="email"/>
        <a :href="`mailto:${setting.qq}@qq.com`">2528966877@qq.com</a>
    </li> 
    <li class="tencent">
        <Icon type="qq"/>
        <a :href="`tencent://message/?Menu=yes&uin=${setting.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">2528966877
        </a>
        <div class="pop">
            <img :src="setting.qqQrCode" alt="">
        </div>
    </li> 
    <li class="tencent">
        <Icon type="weixin"/>
        <a href="">{{setting.weixin}}</a>
        <div class="pop">
            <img :src="setting.weixinQrCode" alt="">
        </div>
    </li>  
  </ul>
</template>

<script>
import Icon from '../../Icon';
import { mapState } from 'vuex'
export default {
    computed : mapState('setting',['setting'])
    ,
    components : {
        Icon,
    },
    
}
</script>

<style lang="less" scoped>
@import '../../../styles/var.less';
.container{
    list-style-type: none;
    li{
        position: relative;
        height: 50px;
        line-height: 50px;
        color:@words;
        &:hover>.iconfont,&:hover>a{
            color: @primary;
        }
        .iconfont{
            font-size :25px;
            vertical-align: middle;
             color:@lightWords;
        }
        a{
            text-decoration: none;
             color:@lightWords;
             margin-left: 10px;
            //  font-size: 20px;
        }
        &.tencent:hover>.pop{
                transform: scaleY(1)
            }
        .pop{
            position: absolute;
            width: 150px;
            height: 50px;
            background: blue;
            top: -45px;
            left: 0;
            transition: all .5s ease-in-out;
            transform: scaleY(0);
            &::after{
                position: absolute;
                content: '';
                width: 30px;
                height: 30px;
                left: 50%;
                bottom: -15px;
                transform: translateX(-50%) rotate(45deg);
                background: #fff;
            }
            img{
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                z-index: 9;
                // opacity: 0;
            }
        }
    }
}
   
</style>