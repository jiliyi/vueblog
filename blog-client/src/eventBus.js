let listeners = {}
export default {
    $on(event,handle){
        //监听
        if(!listeners[event]){
            listeners[event] = new Set();
        }
        listeners[event].add(handle);
    },
    $off(event,handle){
        // 取消监听
        if(listeners[event]){
            listeners[event].delete(handle)
        }
    },
    $emit(event,...args){
        //触发事件
        if(listeners[event]){
            listeners[event].forEach(handle=>{
                handle(...args)
            })
        }
    }
}
