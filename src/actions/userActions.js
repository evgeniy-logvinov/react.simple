import * as types from './actionTypes';
import userApi from '../api/userApi';

export const addUserInfoSuccess = (userInfo) => ({ type: types.ADD_USER_INFO_SUCCESS, userInfo });
export const removeUserInfoSuccess = () => ({ type: types.REMOVE_USER_INFO_SUCCESS });

export const getUserInfo = () => async (dispatch) => {
    try {
        const { data } = await userApi.getUserInfo();
        return dispatch(addUserInfoSuccess(data));
    } catch (err) {
        throw err;
    }
}

export const removeUserInfo = () => async (dispatch) => {
    try {
        return dispatch(removeUserInfoSuccess());
    } catch (err) {
        throw err;
    }
}