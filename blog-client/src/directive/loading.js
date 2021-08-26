import imgSrc from '@/assets/loading.svg';
import style from './loading.module.less';
function createImg() {
    const img = document.createElement('img');
    img.dataset.role = 'loading';
    img.src = imgSrc;
    img.className = style.loading;
    return img;
}

function getImg(el) {
    return el.querySelector('img[data-role=loading]');
}

export default function (el, binding) {


    const curImg = getImg(el)

    if (binding.value) {
        //创建
        if (!curImg) {
            const img = createImg();
            el.appendChild(img);
        }

    } else {
        if (curImg) curImg.remove();
    }
}