import { combineReducers } from 'redux'
import security from './sessionReducer'
import userInfo from './userInfoReducer'
import shop from './shop'

export default combineReducers({
    security,
    shop,
    userInfo,
})