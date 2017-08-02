import React from 'react';
import { shallow } from 'enzyme';
import CustomerStatus from './CustomerStatus';
import { expect } from 'chai';

const setup = (props) => {
    const component = shallow(
        <CustomerStatus {...props} />
    );

    return { component };
};

const betsStatus = {
    stakes: 1,
    total: 4,
    won: 3,
    lost: 1
};

const betsStatusZeroStakes = {
    stakes: 0,
    total: 4,
    won: 3,
    lost: 1
};

describe('CustomerStatus component: ', () => {
    it('should render component with all 4 status icons', () => {
        const { component } = setup({ betsStatus });

        expect(component.find('i')).to.have.length(4);
    });

    it('should render component without stakes icon', () => {
        const { component } = setup({ betsStatus: betsStatusZeroStakes });

        expect(component.find('i')).to.have.length(3);
    });
});
