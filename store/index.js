"use strict"

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        userInfo: {

        }

    },

    getters: {

    },

    mutations: {
        addObj(state, obj) {
            for(let key in obj) {
                
                state.userInfo[key] = obj[key]
            }
            
        }

    },

    actions: {

    }


})

export default store

