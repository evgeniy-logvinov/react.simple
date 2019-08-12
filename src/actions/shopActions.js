import * as types from './actionTypes';
import shopApi from '../api/shopApi';

export const getProductsSuccess = (products) => ({ type: types.GET_PRODUCTS_SUCCESS, products });

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await shopApi.getProducts();
        return dispatch(getProductsSuccess(data));
    } catch (err) {
        throw err;
    }
}
