import Vuex from 'vuex';
import Vue from 'vue';

import actions from '../actions/TodoAction';
import mutations from '../mutations/TodoMutations';
import getters from '../getters/TodoGetters';
import state from '../states/initialState';

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;
