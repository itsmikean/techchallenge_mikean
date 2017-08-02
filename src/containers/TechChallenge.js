import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { getData } from '../actions/techchallengeActions';
import Loader from '../components/Loader';
import CustomerHeader from '../components/CustomerHeader';
import CustomerSection from './CustomerSection';

class TechChallenge extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getData());
    }

    render() {
        const { uiReducer } = this.props;
        const { selectedDate } = this.props.techchallengeReducer;

        return (
            <div className="container">
                { uiReducer.loading && <Loader /> }

                { uiReducer.error &&
                    <div className="alert alert-danger">
                        { uiReducer.errorMessage }
                    </div>
                }

                { uiReducer.loaded &&
                    <div>
                        <CustomerHeader selectedDate={moment(selectedDate)}/>
                        <CustomerSection />
                    </div>
                }
            </div>
        );
    }
}


TechChallenge.propTypes = {
    uiReducer: PropTypes.object.isRequired,
    techchallengeReducer: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { uiReducer, techchallengeReducer } = state;
    return { uiReducer, techchallengeReducer };
}

export default connect(mapStateToProps)(TechChallenge);  // maps state and adds dispatch prop
