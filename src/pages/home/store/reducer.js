import { actionTypes } from './index';

import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    writerPage: 1,
    writerTotalPages: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList),
                writerTotalPages: action.writerTotalPage
            });
            case actionTypes.CHANGE_PAGE:
                const currentPage = state.get('writerPage');
                if (currentPage < state.get('writerTotalPages')) {
                    return state.set('writerPage', currentPage + 1)
                }
                return state.set('writerPage', 1)
        default:
            return state;
    }
}