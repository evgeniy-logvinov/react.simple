import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.session, action) => {
    switch (action.type) {
        case types.LOG_IN_SUCCESS:
            return !!sessionStorage.token
        default:
            return state;
    }
};
