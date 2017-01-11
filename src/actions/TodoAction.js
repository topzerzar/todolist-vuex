import * as types from '../constants/types';

const actions = {
    addToList: ({ commit }, message) => {
        commit(types.ADD_TO_LIST, message);
    },
    removeItemList: ({ commit }, message) => {
        commit(types.REMOVE_TO_LIST, message);
    },
};

export default actions;
