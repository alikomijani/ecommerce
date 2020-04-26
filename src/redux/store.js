import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReduser from './root.reducer';

const middlewares = [logger];

export const store = createStore(rootReduser, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
