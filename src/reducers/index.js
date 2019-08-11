import { combineReducers } from 'redux'
import security from './sessionReducer'
import basket from './basket'

export default combineReducers({
    security,
    basket
})