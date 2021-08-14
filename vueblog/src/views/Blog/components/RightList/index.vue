<template>
    <ul class="right-list-container">
        <li 
        v-for="(item,i) in list" :key="i">
            <span @click="handleClick(item)"
             :class="{active : item.isSelected === true}" 
             > {{item.name}} </span> 
             <span :class="{aside:true,active:item.isSelected === true}" v-if="item.aside">{{ item.aside }}</span>
            <RightList :list="item.children" @select="handleClick"/> 
        </li>
    </ul>
</template>

<script>

export default {
    name:'RightList',
    props : ['list'],
    methods : {
        handleClick(item){
            this.$emit('select',item);
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
    .right-list-container{
        margin: 0;
        padding: 0;
        list-style: none;
        .right-list-container{
            margin-left: 1rem;
        }
        li{
            min-height: 30px;
            line-height: 30px;
            font-size: 14px;
            font-weight: bold;
            span{
                cursor: pointer;
                &.active{
                    color:#f40;
                }
                &.aside{
                    margin-left: 10px;
                    color: @gray;
                    &.active{
                        color: #f40;
                    }
                }
            }
        }
    }
</style>