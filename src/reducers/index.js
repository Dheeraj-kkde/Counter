import reducer1 from './plusMinus';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({reducer1});
// const rootReducer = combineReducers({reducer1, reducer2, reducer3});

export default rootReducer;

