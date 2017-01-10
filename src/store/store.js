import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listData: [],
    },
    mutations: {
        addToList: (state, message) => {
            state.listData.push(message);
        },
        remove: (state, message) => {
            state.listData.pop(message);
        },
    },
});

export default store;
