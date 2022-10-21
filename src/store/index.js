import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import switchReducer from './ducks/pageSwitch';
import authReducer from './ducks/auth';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  authReducer,
  switchReducer,
});

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}
