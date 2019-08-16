import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default (state = initialState.shop.basket, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT_SUCCESS:
            return { ...state, products: addProduct(state.products, action.product) };
        case types.REMOVE_PRODUCT_SUCCESS:
            return { ...state, products: removeProduct(state.products, action.product) };
        case types.ADD_TICKET_SUCCESS:
            return { ...state, ticketId: action.ticketId };
        case types.CLEAN_BASKET_SUCCESS:
            return { ...state, products: [] };
        default:
            return state;
    }
}

const addProduct = (products = [], product = {}) => {
    if (products.map(el => el.id).includes(product.id)) {
        const currentPproduct = products.find(el => el.id === product.id);
        currentPproduct.count++;
    } else {
        products.push({ count: 1, ...product });
    }

    return products;
}

const removeProduct = (products = [], product = {}) => {
    if (product.count > 1) {
        product.count--;
    } else {
        const productIndex = products.map(el => el.id).indexOf(product.id);

        if (productIndex === -1) {
            throw new Error('Please contact system administrator. Cannot find product in basket')
        }

        products.splice(productIndex, 1);
    }

    return products;
}