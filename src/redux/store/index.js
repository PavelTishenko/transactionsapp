import { createStore, applyMiddleware } from 'redux';
import  reducer  from '../reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { watchLoadData } from '../../saga/sagas';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watchLoadData);