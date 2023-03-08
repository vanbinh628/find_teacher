import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import ReducerUserInfo from './reducer/ReducerUserInfo';
import ReducerTopic from './reducer/ReducerTopic';
import {ReducerNotification} from './reducer/ReducerNotification'


const rootReducer = combineReducers({
    userInfo: ReducerUserInfo,
    topics: ReducerTopic,
    notis: ReducerNotification
});

export const Store = createStore(rootReducer, compose(applyMiddleware(thunk)));