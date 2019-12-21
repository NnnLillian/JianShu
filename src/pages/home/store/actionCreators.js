import { actionTypes } from './index';
import axios from 'axios';

export const getTopicListAction = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(
            (res) => {
                const result = res.data.data;
                dispatch(changeListAction(result))
            }
        ).catch(
            () => { console.log("get headList.json error") }
        )
    }
}

const changeListAction = (data) => ({
    type: actionTypes.CHANGE_LIST,
    topicList: data.topicList,
    articleList: data.articleList
})