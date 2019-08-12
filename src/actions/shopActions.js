import * as types from './actionTypes';
import shopApi from '../api/shopApi';

export const getProductsSuccess = (products) => ({ type: types.GET_PRODUCTS_SUCCESS, products });
export const addProductSuccess = (product) => ({ type: types.ADD_PRODUCT_SUCCESS, product });

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await shopApi.getProducts();
        return dispatch(getProductsSuccess(data));
    } catch (err) {
        throw err;
    }
}

export const addProductToBasket = (product) => async (dispatch) => {
    return dispatch(addProductSuccess(product));
}