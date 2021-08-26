<template>
  <div class="menu-container">
    <ul>
        <RouterLink
        :exact="!item.startWith"
        tag="li"
        :to="item.href"
        class="outer"
         v-for="item in menuList" :key="item.text">
            <Icon :type="item.type" />
            <span class="inner" >{{ item.text }}</span>
        </RouterLink>
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
                href : '/blog',
                startWith : true
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
    methods : {
      
    },
  components: { Icon }

}

</script>

<style lang="less" scoped>
@import '../../../styles/var.less';
    .menu-container{
        width:100%;
        background:@dark;
          overflow: hidden;
        ul{
        margin: 0;
        padding: 0;
        list-style: none;
        width: 100%;
       
       
        .outer{
            height: 40px;
            line-height: 40px;
            color: white;
            width: 100%;
            cursor: pointer;
            padding-left: 30%;
            box-sizing: border-box;
            &.router-link-active{
                background: darken(@words,3%) ;
            }
            .iconfont{
                font-size: 20px;
                vertical-align: middle;
                color: @lightWords;
            }
            .inner{
                font-size: 15px;
                margin-left: 10px;
                color: @lightWords;
                text-decoration: none;
            }
            &:hover>span,&:hover>.iconfont{
                color: white;
            }
        }
        }
        }
</style>