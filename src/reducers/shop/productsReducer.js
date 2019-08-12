import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default (state = initialState.shop.products, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_SUCCESS:
            return action.products;
        default:
            return state;
    }
}
