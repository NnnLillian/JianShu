import { actionTypes } from './index';
import axios from 'axios';

export const changeScrollTopShowAction = (toggle) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    toggle,
})

export const getMoreListAction = (articlePage) => {
    return (dispatch) => {
        console.log("getMoreList");
        axios.get('/api/moreList.json?page=' + articlePage).then(
            (res) => {
                const result = res.data.data;
                // console.log(result)
                dispatch(addListAction(result, articlePage + 1))
            }
        ).catch(
            () => {
                console.log("get headList.json error")
            }
        )
    }
}

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
            () => {
                console.log("get headList.json error")
            }
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

const addListAction = (data, newArticlePage) => ({
    type: actionTypes.ADD_LIST,
    articleList: data.list,
    articlePage: newArticlePage,
})