import { actionTypes } from './index';
import axios from 'axios';

export const getDetailAction = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then(
            (res) => {
                const result = res.data.data;
                console.log(result)
                dispatch(changeDetail(result))
            })
            .catch(
                () => {
                    console.log("get detail.json error")
                }
            )
    }
}

const changeDetail = (data) => ({
    type: actionTypes.CHANGE_DETAIL,
    title: data.title,
    content: data.content,
})