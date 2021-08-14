/**
 * 函数防抖
 */
export default function (fn, durtion = 100) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, durtion)
    }
}