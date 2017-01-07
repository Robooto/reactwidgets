import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LayoutReducer from './layout_reducer';
import AllergyReducer from './allergy_reducer';

const rootReducer = combineReducers({
  layout: LayoutReducer,
  form: formReducer,
  allergy: AllergyReducer
});

export default rootReducer;
