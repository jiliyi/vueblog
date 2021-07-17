<template>
    <div class="container">
     <div class="avatar-container"> 
         <Avatar :size="200" url="https://img2.baidu.com/it/u=1205915504,3217808836&fm=26&fmt=auto&gp=0.jpg" />
      </div>
        <Menu />
        <div class="contact-container">
         <Contact />
        </div>
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
    .container{
        width: 100%;
        height: 100%;
        .avatar-container{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .contact-container{
            width: 100%;
            height: 250px;
        }
    }
</style>