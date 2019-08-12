import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.shop, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_SUCCESS:
            return { products: action.products };
        default:
            return state;
    }
}
