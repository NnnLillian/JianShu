import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store/index';
import { reducer as homeReducer } from '../pages/home/store/index';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer,
}) 