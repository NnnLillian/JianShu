import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store/index';
import { reducer as homeReducer } from '../pages/home/store/index';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
}) 