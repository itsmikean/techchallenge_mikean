import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import CustomerStatus from '../components/CustomerStatus';
import CustomerBets from '../components/CustomerBets';
import RaceDetails from '../components/RaceDetails';
import {
    updateSelectedRace,
    resetSelectedRace
} from '../actions/techchallengeActions';

class CustomerSection extends Component {

    constructor(props) {
        super(props);
        this.getBetsStatus = this.getBetsStatus.bind(this);
        this.getHorses = this.getHorses.bind(this);
        this.handleRaceSelection = this.handleRaceSelection.bind(this);
        this.getBetsOnSelectedDate = this.getBetsOnSelectedDate.bind(this);
    }

    getBetsOnSelectedDate(bets) {
        let selectedDate = this.props.techchallengeReducer.selectedDate;

        return bets.filter(i =>
            moment(i.start).diff(moment(selectedDate), 'days') === 0
        );
    }

    getStakes(bets) {
        return bets.reduce((a, b) => {
            return a + b.returnStake;
        }, 0);
    }

    getBetsStatus(bets) {
        let selectedDaysBets = this.getBetsOnSelectedDate(bets);
        let wonBets = selectedDaysBets.filter(i => i.won === true);                                 // get all the won bets by filtering with customerId & won
        let lostBets = selectedDaysBets.filter(i => i.won === false);                               // get all the lost bets by filtering with customerId & !won
        let stakes = this.getStakes(wonBets) - this.getStakes(lostBets);                        // get stakes inhand

        return {
            stakes,
            total:selectedDaysBets.length,
            won:wonBets.length,
            lost:lostBets.length
        };
    }

    getHorses(selection, bets) {
        let bet = bets.filter(i => i.name === selection).reduce(a => a);
        return bet.horses;
    }

    handleRaceSelection(customerId, raceToSelect, alreadySelected) {
        if (raceToSelect === alreadySelected) {
            return this.props.dispatch(resetSelectedRace(customerId));
        } else {
            return this.props.dispatch(updateSelectedRace(customerId, raceToSelect));
        }
    }

    render() {
        const { customers } = this.props.techchallengeReducer;

        return (
            <div>
                {customers.map(customer =>
                    <div key={customer.id}>

                        <section className="customer-section">

                            <div className="customer">

                                <span className="customer-detail">
                                    {customer.id}. {customer.name}
                                </span>

                                <CustomerStatus betsStatus={this.getBetsStatus(customer.bets)} />

                            </div>

                            <CustomerBets
                                customerId={customer.id}
                                bets={this.getBetsOnSelectedDate(customer.bets)}
                                betSelected={customer.betSelected}
                                handleSelection={this.handleRaceSelection} />

                        </section>

                        { customer.betSelected &&
                                <RaceDetails
                                    raceName={customer.betSelected}
                                    horses={this.getHorses(customer.betSelected, customer.bets)} />
                        }

                    </div>
                )}
            </div>
        );
    }
}


CustomerSection.propTypes = {
    techchallengeReducer: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { techchallengeReducer } = state;
    return { techchallengeReducer };
}

export default connect(mapStateToProps)(CustomerSection);  // maps state and adds dispatch prop
