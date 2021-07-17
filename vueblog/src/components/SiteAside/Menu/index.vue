<template>
  <div class="menu-container">
    <ul>
        <li v-for="item in menuList" :key="item.text">
            <Icon :type="item.type" />
            <a :to="item.href">{{ item.text }}</a>
        </li>
    </ul>  
  </div>
</template>

<script>
import Icon from "../../Icon"

export default {
    data(){
        return{
            menuList : [
               {
              type : 'home',
              text : '首页'  ,
              href : '/'
            },
            {
                type : 'blog',
                text : '文章',
                href : '/blog'
            },
            {
                type : 'about',
                text : '关于我',
                href : '/about'
            },
            {
                type :'code',
                text : '项目&效果',
                href : '/project'
            },
            {
                type : 'chat',
                text : '留言板',
                href : '/message'
            }
            ]
        }
    },
  components: { Icon }

}

</script>

<style lang="less" scoped>
@import '../../../styles/var.less';
    .menu-container{
        width:100%;
        background:@dark;
         border-radius: 10px;
        ul{
        margin: 0;
        padding: 0;
        list-style: none;
        width: 100%;
       
        li{
            margin-left: 25px;
            height: 40px;
            width: 100%;
            line-height: 40px;
            color: white;
            .iconfont{
                font-size: 20px;
                // vertical-align: middle;
                color: @lightWords;
            }
            a{
                font-size: 15px;
                margin-left: 10px;
                color: @lightWords;
            }
            &:hover>a,&:hover>.iconfont{
                color: white;
            }
        }
        }
        }
</style>