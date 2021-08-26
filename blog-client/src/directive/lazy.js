import eventBus from '@/eventBus';

import { debounce } from '@/utils'

import defaultSrc from '@/assets/default.gif';

let imgs = [];

const clientHeight = document.documentElement.clientHeight;

function setImage(img) {

    img.dom.src = defaultSrc;

    let rect = img.dom.getBoundingClientRect();
    const height = rect.height || 200;
    const top = rect.top;
    
    if (top > -height && top < clientHeight) {
        
        const tempImg = new Image();
        tempImg.onload = function(){
            img.dom.src = img.src
        }
        tempImg.src = img.src;
        imgs = imgs.filter(i => !(i === img));

    }

}

function setImages() {

    for (const img of imgs) {
        setImage(img)
    }
}
const setDebounceImg = debounce(setImages, 50);
eventBus.$on('loadimg', setDebounceImg)

export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value
        };
        imgs.push(img);
        setImage(img)
    },
    unbind(el) {
        imgs = imgs.filter(it => it.dom !== el)
    }
}