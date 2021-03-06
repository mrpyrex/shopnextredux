import { combineReducers } from 'redux'
import { userLoginReducer, userRegisterReducer } from './userReducer'
import { productListReducer } from './productReducer'

const rootReducer =  combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    productList: productListReducer
})
export default rootReducer