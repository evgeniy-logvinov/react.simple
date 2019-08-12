import * as types from '../../actions/actionTypes';
import initialState from '../initialState';

export default (state = initialState.shop.basket, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT_SUCCESS:
            return { products: addProduct(state.products, action.product) };
        default:
            return state;
    }
}

const addProduct = (products = [], product = {}) => {
    if (products.map(el => el.id).includes(product.id)) {
        const currentPproduct = products.find(el => el.id === product.id);
        currentPproduct.count = currentPproduct.count + 1;
    } else {
        console.log(product)
        products.push({ count: 1, ...product });
    }

    return products;
}