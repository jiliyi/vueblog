<template>
  <i class="iconfont" :class="className"></i>
</template>

<script>
export default {
    data(){
        return {
            classMap : {
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
        }
    },
    props : {
        type : {
            type : String,
            require : true
        }
    },
    computed : {
        className(){
            return this.classMap[this.type]
        }
    }

}
</script>

<style>
 @import '//at.alicdn.com/t/font_2672200_ykb6vs80ewg.css'
</style>