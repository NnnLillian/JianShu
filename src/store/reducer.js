import { combineReducers } from 'redux';

import { reducer as headerReducer } from '../common/header/store/index';

export default combineReducers({
    header: headerReducer
})