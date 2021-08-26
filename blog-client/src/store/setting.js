import { getSetting } from '@/api/setting'
export default {
    namespaced : true,
    state: {
        isLoading : false,
        setting : null
    },
    mutations: {
        setLoading(state,payload){
            state.isLoading = payload
        },
        setSeting(state,payload){
            state.setting = payload
        }
    },
    actions: {
        async setSetting(ctx){
            ctx.commit('setLoading',true);
            const resp = await getSetting();
            ctx.commit('setSeting',resp);
            ctx.commit('setLoading',false)
        }
    }
  }