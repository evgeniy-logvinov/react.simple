const initialState = {
    products: [],
};

const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { products: state.products.push(action.product) };
        default:
            return state;
    }
}

export default basket;
