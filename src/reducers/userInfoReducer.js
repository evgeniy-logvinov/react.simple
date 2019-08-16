import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.userInfo, action) => {
    switch (action.type) {
        case types.ADD_USER_INFO_SUCCESS:
            return action.userInfo;
        case types.REMOVE_USER_INFO_SUCCESS:
            return initialState.userInfo;
        case types.CREATE_NEW_USER_INFO_SUCCESS:
            return initialState.userInfo;
        case types.UPDATE_USER_INFO_SUCCESS:
            return initialState.userInfo;
        default:
            return state;
    }
};
