import { actionTypes } from './index';

import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LIST:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            })
        default:
            return state;
    }
}