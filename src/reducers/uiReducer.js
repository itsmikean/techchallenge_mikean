import {
    REQUEST_STARTED,
    REQUEST_COMPLETED,
    REQUEST_ERROR
} from '../constants/ActionTypes';

const INITIAL_STATE = {
    loading: false,
    loaded: false,
    error: false,
    errorMessage: ''
};

export function uiReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_STARTED:
            return {
                ...state,
                loading: true,
                error: false
            };
        case REQUEST_COMPLETED:
            return {
                ...state,
                loading: false,
                loaded: true
            };
        case REQUEST_ERROR:
            return {
                ...state,
                error: true,
                // errorMessage: action.error.status_code !== 401 && action.error.message || 'Sorry, an error occurred. Please refresh the page and try again.'
                errorMessage: 'Sorry, an error occurred. Please refresh the page and try again.'
            };
        default:
            return state;
    }
}
