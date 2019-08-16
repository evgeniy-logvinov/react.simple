import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';

export const loginSuccess = () => ({ type: types.LOG_IN_SUCCESS });
export const logoutSuccess = () => ({ type: types.LOG_OUT_SUCCESS });

export const logInUser = (credentials) => async (dispatch) => {
    try {
        const { data } = await sessionApi.login(credentials);
        sessionStorage.setItem('token', data.token);
        return dispatch(loginSuccess());
    } catch (err) {
        throw err;
    }
}

export const logOutUser = () => async (dispatch) => {
    try {
        await sessionApi.logout();
        sessionStorage.removeItem('token');
        return dispatch(logoutSuccess());
    } catch (err) {
        throw err;
    }
}
