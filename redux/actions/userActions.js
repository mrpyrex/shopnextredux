import axios from 'axios'
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,USER_LOGIN_FAIL, USER_REGISTER_FAIL,USER_LOGOUT,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS } from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://localhost:8000/api/accounts/login/',
            { 'email': email, 'password': password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const register = (username, first_name, last_name, email, password1, password2) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://localhost:8000/api/accounts/registration/',

            { 'username':username,'first_name': first_name, 'last_name':last_name, 'email': email, 'password1': password1, 'password2': password2 },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
