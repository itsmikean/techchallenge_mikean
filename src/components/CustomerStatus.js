import React, { PropTypes } from 'react';

const CustomerStatus = ({ betsStatus }) => (
    <div className="customer-status">

        {
            betsStatus.stakes ?
            <i className={ `stake-status fa fa-long-arrow-${betsStatus.stakes > 0 ? 'up' : 'down'}` }></i>
            : null
        }

        <span className="total">
            <i className="fa fa-flag-checkered"></i>
            {betsStatus.total}
        </span>

        <span className="won">
            <i className="fa fa-angle-up"></i>
            {betsStatus.won}
        </span>

        <span className="lost">
            <i className="fa fa-angle-down"></i>
            {betsStatus.lost}
        </span>

    </div>
);

CustomerStatus.propTypes = {
    betsStatus: PropTypes.object.isRequired
};

export default CustomerStatus;
