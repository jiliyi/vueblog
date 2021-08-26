import {fetchAbout} from '@/api/about'

export default {
    namespaced : true,
    state : {
        isLoading : false,
        data : null
    },
    mutations : {
        setIsLoading(state,payload){
            state.isLoading = payload;
        },
        setData(state,payload){
            state.data = payload
        }
    },
    actions : {
        async setData(ctx){
            ctx.commit('setIsLoading',true);
            const resp = await fetchAbout();
            ctx.commit('setData',resp);
            ctx.commit('setIsLoading',false);
        }
    }
}