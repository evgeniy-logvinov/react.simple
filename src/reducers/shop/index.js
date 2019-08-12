import products from './productsReducer';
import basket from './basketReducer';
import { combineReducers } from 'redux'

export default combineReducers({
    products,
    basket
});
