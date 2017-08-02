import {
    GET_CUSTOMERS,
    UPDATE_CUSTOMER_BETS,
    UPDATE_CUSTOMER_RACES,
    UPDATE_SELECTED_RACE,
    RESET_SELECTED_RACE
} from '../constants/ActionTypes';

import {
    requestStarted,
    requestCompleted,
    requestError
} from './uiActions';

import axios from 'axios';

/**
 *
 * @param {Array} customers
 * @returns {{type, customers: Array}}
 */
function getCustomers(customers) {
    return {
        type: GET_CUSTOMERS,
        customers
    };
}

/**
 *
 * @param {Array} bets
 * @returns {{type, bets: Array}}
 */
function updateCustomerBets(bets) {
    return {
        type: UPDATE_CUSTOMER_BETS,
        bets
    };
}

/**
 *
 * @param {Array} races
 * @returns {{type, races: Array}}
 */
function updateCustomerRaces(races) {
    return {
        type: UPDATE_CUSTOMER_RACES,
        races
    };
}

/**
 *
 * @returns {function(*, *)}
 */
export function getData() {
    return (dispatch) => {
        dispatch(requestStarted());
        axios.get(`/GetCustomers?name=mikean`)
        // axios.get(`/GetCustomers.json`)
        .then((response) => {
            dispatch(getCustomers(response.data));
        })
        .then(() => {
            axios.get(`/GetBets?name=mikean`)
            // axios.get(`/GetBets.json`)
            .then((response) => {
                dispatch(updateCustomerBets(response.data));
            })
            .then(() => {
                axios.get(`/GetRaces?name=mikean`)
                // axios.get(`/GetRaces.json`)
                .then((response) => {
                    dispatch(updateCustomerRaces(response.data));
                    dispatch(requestCompleted());
                });
            });
        })
        .catch((response, error) => {
            dispatch(requestCompleted());
            dispatch(requestError(error));
        });
    };
}

export function updateSelectedRace(customerId, betSelected, alreadySelected) {
    return {
        type: UPDATE_SELECTED_RACE,
        customerId,
        betSelected,
        alreadySelected
    };
}

export function resetSelectedRace(customerId) {
    return {
        type: RESET_SELECTED_RACE,
        customerId,
        betSelected: false
    };
}
