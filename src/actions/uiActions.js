import {
    REQUEST_STARTED,
    REQUEST_COMPLETED,
    REQUEST_ERROR
} from '../constants/ActionTypes';

export function requestStarted() {
    return {
        type: REQUEST_STARTED
    };
}

export function requestCompleted() {
    return {
        type: REQUEST_COMPLETED
    };
}

export function requestError() {
    return {
        type: REQUEST_ERROR
    };
}
