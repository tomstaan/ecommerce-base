import axios from 'axios';

import { GET_PRODUCTS } from './types.js';

//Get Products 
export const getProducts = () => dispatch => {
    axios.get('api/products').then(
        res=> {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        }
    )
    .catch(err => console.log(err));
}