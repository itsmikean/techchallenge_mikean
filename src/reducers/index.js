import { combineReducers } from 'redux';
import { techchallengeReducer } from './techchallengeReducer';
import { uiReducer } from './uiReducer';

export default combineReducers({
    techchallengeReducer,
    uiReducer
});
