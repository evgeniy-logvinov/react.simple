import * as types from './actionTypes';
import userApi from '../api/userApi';

export const addUserInfoSuccess = (userInfo) => ({ type: types.ADD_USER_INFO_SUCCESS, userInfo });
export const createNewUserSuccess = (userInfo) => ({ type: types.CREATE_NEW_USER_INFO_SUCCESS, userInfo });
export const updateUserSuccess = (userInfo) => ({ type: types.UPDATE_USER_INFO_SUCCESS, userInfo });
export const removeUserInfoSuccess = () => ({ type: types.REMOVE_USER_INFO_SUCCESS });

export const getUserInfo = () => async (dispatch) => {
    try {
        const { data } = await userApi.getUserInfo();
        return dispatch(addUserInfoSuccess(data));
    } catch (err) {
        throw err;
    }
}

export const createNewUser = (user) => async (dispatch) => {
    try {
        const { data } = await userApi.createUser(user);
        return dispatch(createNewUserSuccess(data));
    } catch (err) {
        throw err;
    }
}

export const updateUser = (user) => async (dispatch) => {
    try {
        const { data } = await userApi.updateUser(user);
        return dispatch(updateUserSuccess(data));
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