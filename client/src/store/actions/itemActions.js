import axios from 'axios';
import {
    GET_ITEMS,
    ADD_ITEM, 
    DELETE_ITEM,
    ITEMS_LOADING
} from './actionsType';

export const getItems = () => {
    return dispatch => {
        dispatch(setItemsLoading())
        axios
            .get('/api/items')
            .then(res => dispatch({
                    type: GET_ITEMS,
                    payload: res.data
            }))
    }
}


export const addItem = item => dispatch => {
    dispatch(setItemsLoading())
   axios
    .post('/api/items', item)
    .then(res => dispatch({
        type: ADD_ITEM,
        item: res.data
    }))
}

export const deleteItem = id => dispatch => {
    dispatch(setItemsLoading())
    axios
        .delete(`/api/items/${id}`)
        .then(res => dispatch({
            type: DELETE_ITEM,
            id: id
        }))
}



export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}