import * as types from './actionTypes';
import shopApi from '../api/shopApi';

export const getProductsSuccess = (products) => ({ type: types.GET_PRODUCTS_SUCCESS, products });
export const addProductSuccess = (product) => ({ type: types.ADD_PRODUCT_SUCCESS, product });
export const removeProductSuccess = (product) => ({ type: types.REMOVE_PRODUCT_SUCCESS, product });

export const addTicketSuccess = (ticketId) => ({ type: types.ADD_TICKET_SUCCESS, ticketId });
export const cleanBasketSuccess = () => ({ type: types.CLEAN_BASKET_SUCCESS });

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

export const removeProductFromBasket = (product) => async (dispatch) => {
    return dispatch(removeProductSuccess(product));
}

export const cleanBasket = () => async (dispatch) => {
    return dispatch(cleanBasketSuccess());
}

export const addTicket = (basket) => async (dispatch) => {
    try {
        const { data } = await shopApi.postBasket(basket);
        return dispatch(addTicketSuccess(data));
    } catch (err) {
        throw err;
    }
}