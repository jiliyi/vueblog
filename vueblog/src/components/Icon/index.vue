<template>
  <i class="iconfont" :class="className"></i>
</template>

<script>
export const classMap = {
                home : 'icon-zhuye',
                github : 'icon-github',
                success : 'icon-zhengque-',
                blog : 'icon-blog',
                weixin : 'icon-weixin',
                qq : 'icon-qq-copy',
                error : 'icon-cuowu',
                warn : 'icon-jinggao',
                code : 'icon-code',
                info : 'icon-xinxi',
                chat : 'icon-liuyan',
                arrowUp : 'icon-shangjiantou',
                arrowDown : 'icon-xiajiantou',
                email : 'icon-email',
                empty : 'icon-empty',
                about : 'icon-zhengque-',
                
            }
export default {
    props : {
        type : {
            type : String,
            require : true
        }
    },
    computed : {
        className(){
            return classMap[this.type]
        }
    }

}
</script>

<style scoped>
 @import '//at.alicdn.com/t/font_2672200_ykb6vs80ewg.css';
.iconfont{
    font-size: inherit;
    color: inherit;
}
</style>