import * as types from '../constants/types';

const mutations = {
    [types.ADD_TO_LIST]: (state, message) => {
        state.listData.push(message);
    },
    [types.REMOVE_TO_LIST]: (state, message) => {
        state.listData.pop(message);
    },
};

export default mutations;
