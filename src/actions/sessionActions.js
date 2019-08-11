import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';

export const loginSuccess = () =>({ type: types.LOG_IN_SUCCESS });

export const logInUser = (credentials) => async (dispatch) => {
    try {
        const response = await sessionApi.login(credentials);
        sessionStorage.setItem('token', response.data.token);
        return dispatch(loginSuccess());
    } catch (err) {
        throw err;
    }
}

export const logOutUser = () => {
    sessionStorage.removeItem('token');
    return { type: types.LOG_OUT }
}
