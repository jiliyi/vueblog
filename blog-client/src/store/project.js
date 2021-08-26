import { fetchProject } from '@/api/project';
export default {
    namespaced : true,
    state : {
        isLoading : false,
        data : []
    },
    mutations : {
        setIsLoading(state,payload){
            state.isLoading = payload
        },
        setData(state,payload){
            state.data = payload
        }
    },
    actions : {
        async setData(ctx){
            if(ctx.state.data.length){
                return
            }
            ctx.commit('setIsLoading',true);
            const resp = await fetchProject()
            ctx.commit('setData',resp);
            ctx.commit('setIsLoading',false);
        }
    }
}