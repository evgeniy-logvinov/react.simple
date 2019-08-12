import { combineReducers } from 'redux'
import security from './sessionReducer'
import shop from './shop'

export default combineReducers({
    security,
    shop
})