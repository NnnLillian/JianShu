import { actionTypes } from './index';
import axios from 'axios';

export const changeWriterPageAction = () => ({
    type: actionTypes.CHANGE_PAGE
})

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
    type: actionTypes.GET_LIST,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList,
    writerList: data.writerList,
    writerTotalPage: Math.ceil(data.writerList.length / 2)
})