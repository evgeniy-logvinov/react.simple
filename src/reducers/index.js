import { combineReducers } from 'redux'
import security from './sessionReducer'
import shop from './shopReducer'

export default combineReducers({
    security,
    shop
})