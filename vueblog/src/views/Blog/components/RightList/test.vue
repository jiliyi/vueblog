<template>
  <RightList :list="list"  @select="handleSelect"/>
</template>

<script>
import RightList from "./";
export default {
  data() {
    return {
      list: [
        {
          name: "a",
          isSelected: false,
        },
        {
          name: "b",
          isSelected: false,
          children : [
              {
                  name : 'b-1',
                  isSelected : false
              },
              {
                  name : 'b-2',
                  isSelected : false,
                  children : [
                      {name : 'b-2-1',isSelected : true},
                      {name : 'b-2-1',isSelected : false}
                  ]
              },
              {
                  name : 'b-3',
                  isSelected : false
              },
          ]
        },
        {
          name: "c",
          isSelected: true,
        },
        {
          name: "d",
          isSelected: false,
        },
      ],
    };
  },
  components: {
    RightList,
  },
  methods : {
      handleSelect(item){
          console.log(item);
          item.isSelected = true;
      }
  }
};
</script>

<style>
</style>