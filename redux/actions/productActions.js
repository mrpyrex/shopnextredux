import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS } from "redux/constants/productConstants"
import axios from 'axios'
import absoluteUrl from "next-absolute-url"

export const listProducts = (req) => async (dispatch) => {
    try {
        
        const {origin} = absoluteUrl(req)
        dispatch({ type: PRODUCT_LIST_REQUEST })
        
        const { data } = await axios.get(`${origin}/api/shop/`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
