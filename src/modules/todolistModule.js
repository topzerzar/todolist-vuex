import * as types from '../constants/types';


const getters = {
    getListData: state => state.listData,
};

const mutations = {
    [types.ADD_TO_LIST]: (state, message) => {
        state.listData.push(message);
    },
    [types.REMOVE_TO_LIST]: (state, message) => {
        state.listData.pop(message);
    },
};

const actions = {
    addToList: ({ commit }, message) => {
        commit(types.ADD_TO_LIST, message);
    },
    removeItemList: ({ commit }, message) => {
        commit(types.REMOVE_TO_LIST, message);
    },
};

export default {
    getters,
    mutations,
    actions,
};
