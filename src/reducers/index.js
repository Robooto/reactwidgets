import { combineReducers } from 'redux';

import LayoutReducer from './layout_reducer';

const rootReducer = combineReducers({
  layout: LayoutReducer
});

export default rootReducer;
