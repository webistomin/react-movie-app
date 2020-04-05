import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

export const sagaMiddleware = createSagaMiddleware();
export const connectedRouterMiddleware = routerMiddleware;
