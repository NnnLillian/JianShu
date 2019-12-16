import { actionTypes } from './index';
import axios from 'axios';

export const inputFocusAction = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const inputBlurAction = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const getListAction = () => {
    return (dispatch) => {
        axios.get('/api/headList.json').then(
            (res) => { 
                dispatch(changeListAction(res.data.data))
             }
        ).catch(
            () => { console.log("get headList.json error") }
        )
    }
}


const changeListAction=(data)=>({
    type: actionTypes.CHANGE_LIST,
    data
})