import React, { PropTypes } from 'react';

const CustomerHeader = ({ selectedDate }) => (
    <div className="row">
        <div className="col-xs-12">
            <div className="title-block">

                <span className="title">Customers</span>

                <input className="hidden" id="selected-date" type="date" value={selectedDate} readOnly />

                <div className="date-dropdown pull-right">
                    <span>Today</span>
                    <i className="fa fa-caret-down"></i>
                </div>

                <ul className="date-dropdown-menu">
                    <li className="is-active"><span>Today</span><i className="fa fa-check"></i></li>
                    <li><span>Tomorrow</span><i className="fa fa-check hidden"></i></li>
                </ul>

            </div>
        </div>
    </div>
);

CustomerHeader.propTypes = {
    selectedDate: PropTypes.object.isRequired
};

export default CustomerHeader;
