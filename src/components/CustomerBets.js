import React, { PropTypes } from 'react';
import moment from 'moment';

const CustomerBets = ({ customerId, bets, betSelected, handleSelection }) => (
    <div className="customer-bets">
        { bets.map(bet => <div
                                        className={`customer-bet ${moment().diff(moment(bet.start)) > 0 ? 'started' : ''}`}
                                        key={bet.raceId}
                                        onClick={() => handleSelection(customerId, bet.name, betSelected)}
                                        >

                                        <div>
                                            {bet.name} ({bet.horses.length})
                                        </div>

                                        <span className={`active-triangle ${betSelected && betSelected === bet.name ? '' : 'hidden'}`}></span>
                                    </div>
        )}
    </div>
);

CustomerBets.propTypes = {
    customerId: PropTypes.number.isRequired,
    bets: PropTypes.array.isRequired,
    betSelected: PropTypes.any.isRequired,
    handleSelection: PropTypes.func.isRequired
};

export default CustomerBets;
