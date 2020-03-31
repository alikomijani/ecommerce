import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReduser from './root.reducer';

const middlewares = [logger];

const store = createStore(rootReduser, applyMiddleware(...middlewares));
export default store;