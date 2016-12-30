import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LayoutReducer from './layout_reducer';

const rootReducer = combineReducers({
  layout: LayoutReducer,
  form: formReducer
});

export default rootReducer;
