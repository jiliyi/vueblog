<template>
    <div class="container">
     <div class="avatar-container"> 
         <Avatar :size="100" url="https://img2.baidu.com/it/u=1205915504,3217808836&fm=26&fmt=auto&gp=0.jpg" />
         <p class="name">尹家礼</p>
      </div>
        <Menu />
        <div class="contact-container">
         <Contact />
        </div>
        <p class="info">备案号 鄂ICP备2021007122号-1</p>
    </div>
</template>

<script>
import Avatar from '../Avatar';
import Menu from './Menu';
import Contact from './Contact';
export default {
    components :{
        Contact,
        Menu,
        Avatar
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/var.less';
    .container{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        .avatar-container{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
            .name{
                font-size: 20px;
                font-weight: 300;
                color: white;
            }
        }
        .contact-container{
            width: 100%;
            height: 250px;
        }
        .info{
            color: #fff;
            text-align: center;
        }
    }
</style>