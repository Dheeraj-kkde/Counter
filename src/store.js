import { legacy_createStore as createStore } from 'redux'; 
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// second argument in createStore is actually added so that redux developer tool can be used

export default store;
