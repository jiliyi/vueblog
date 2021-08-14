import getComponentRootDom from './getComponentRootDom';
import Icon from '@/components/Icon';
import domClass from './showMessage.module.less';


/**
 * 
 * @param {String} content 文字提示 
 * @param {String} type 类型 info error success warn
 * @param {HTMLElement} container dom容器 没传，就在当前屏幕居中
 */
export default function(options = {}){
    const content = options.content || '评论成功';
    const type = options.type || 'success';
    const container = options.container || document.body;
    const durtion = options.durtion || 1000;
    let div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon,{
        type
    })
    let sufName = `center-${type}`;
    div.className = `${domClass[sufName]} ${domClass.center}`;
    div.innerHTML = `<span class="${domClass.icon_container}">${iconDom.outerHTML}</span><div class="${domClass.icon_content}">${content}</div>`;
    if(!container){
        container = document.body
    }
   if(getComputedStyle(container).position === 'static'){
        container.style.position  = 'relative';
   }
    container.appendChild(div);
    div.clientHeight;
    div.style.transform = `translate(-50%,-50%)`;
    div.style.opacity = 1; 
    setTimeout(()=>{
        div.style.transform = `translate(-50%,-50%) translateY(${-15}px)`;
        div.style.opacity = 0;
        div.addEventListener('transitionend',()=>{
            div.remove()
            options.callback ? options.callback() : '';
           },{once:true})       
    },durtion) 
   
}