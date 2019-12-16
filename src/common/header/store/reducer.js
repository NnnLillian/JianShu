import { actionTypes } from './index';

import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPages: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            const list = fromJS(action.data);
            return state.merge({
                list: list,
                totalPages: action.page
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
            const currentPage = state.get('page')
            if (currentPage < state.get('totalPages')) {
                return state.set('page', currentPage + 1)
            }
            return state.set('page', 1)
        default:
            return state;
    }
}