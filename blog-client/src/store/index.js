import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import setting from './setting'
import banner from './banner'
import about from './about'
import project from './project';

export default new Vuex.Store({
  modules: {
    setting,
    banner,
    about,
    project
  }
})
