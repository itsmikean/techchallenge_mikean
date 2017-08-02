import React, { PropTypes } from 'react';

const Loader = ({ block }) => {
    let mainClass = block && 'loader-inline' || 'loader';

    return (
        <div className={mainClass}></div>
    );
};

Loader.propTypes = {
    block: PropTypes.bool
};

export default Loader;
