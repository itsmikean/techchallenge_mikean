import {
    GET_CUSTOMERS,
    UPDATE_CUSTOMER_BETS,
    UPDATE_CUSTOMER_RACES,
    UPDATE_SELECTED_RACE,
    RESET_SELECTED_RACE
 } from '../constants/ActionTypes';

const INITIAL_TECHCHALLENGE_STATE = {
    customers: [],
    selectedDate: new Date()
};

/**
 * @description
 * Updating customer data when Customers, Bets and Races are fetched
 * Updating & Resetting race selections
 */
export function techchallengeReducer(state = INITIAL_TECHCHALLENGE_STATE, action) {
    switch (action.type) {
        case GET_CUSTOMERS:
            return Object.assign({}, state, {
                customers: action.customers
            });
        case UPDATE_CUSTOMER_BETS:
        case UPDATE_CUSTOMER_RACES:
        case UPDATE_SELECTED_RACE:
        case RESET_SELECTED_RACE:
            return Object.assign({}, state, {
                customers: updateCustomers(state.customers, action)
            });
        default:
            return state;
    }
}

/**
 * @description
 * Updating customer data when Bets and Races are fetched
 * Updating & Resetting race selections
 */
function updateCustomers(state = [], action) {
    switch (action.type) {
        case UPDATE_CUSTOMER_BETS:
            return state.map(customer => Object.assign({}, customer, {
                bets: Object.assign([], action.bets.filter(i => i.customerId === customer.id)),
                betSelected: false
            })
        );
        case UPDATE_CUSTOMER_RACES:
            return state.map(customer => Object.assign({}, customer, {
                bets: updateCustomerRaces(customer.bets, action)
            })
        );
        case UPDATE_SELECTED_RACE:
        case RESET_SELECTED_RACE:
            return state.map(customer =>
                customer.id === action.customerId ?
                { ...customer,
                    betSelected: action.betSelected
                } : customer
        );
        default:
            return state;
    }
}

/**
 * @description Updating customer data when Races fetched
 * @ToDo: Fix the hack when API gets updated
 */
function updateCustomerRaces(state = [], action) {
    switch (action.type) {
        case UPDATE_CUSTOMER_RACES:
            return state.map(bet => Object.assign({}, bet,
                action.races
                .filter(i => i.name === `R${bet.raceId}`)
                .reduce(a => a)
            )
        );
        default:
            return state;
    }
}
