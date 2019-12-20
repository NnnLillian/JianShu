import { actionTypes } from './index';

import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: []
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TOPIC_LIST:
            const list = fromJS(action.data);
            return state.merge({
                topicList: list,
            })
        default:
            return state;
    }
}