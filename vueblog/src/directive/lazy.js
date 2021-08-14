import eventBus from '@/eventBus';

import { debounce } from '@/utils'

let imgs = []

function setImg(container){
    const clientHeight = container.clientHeight;
   for (const img of imgs) {
       const dom = img.dom;
       const top = dom.getBoundingClientRect().top;
       if(top > -208 && top < clientHeight){
           dom.src = img.src;
       }
   }
}
const setDebounceImg = debounce(setImg,500);
eventBus.$on('loadimg',setDebounceImg)

export default {
    bind(el,binding){
        imgs.push({
            dom : el,
            src : binding.value
        })
    },
    unbind(el){
      imgs =  imgs.filter(it=>it.dom !==el)
    }
}