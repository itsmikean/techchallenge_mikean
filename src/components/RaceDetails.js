import React, { PropTypes } from 'react';

const RaceDetails = ({ raceName, horses }) => (
    <div className="race-details">
        <div className="race-details-header">{raceName} {horses.length} - horses</div>
        <ul className="race-details-list">
            {
                horses.map(horse =>
                    <li key={horse.id}>
                        {horse.id} . {horse.name}
                        <div className="pull-right">odds {horse.odds}</div>
                    </li>
            )}
        </ul>
    </div>
);

RaceDetails.propTypes = {
    raceName: PropTypes.string.isRequired,
    horses: PropTypes.array.isRequired
};

export default RaceDetails;
