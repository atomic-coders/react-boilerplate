import {expect} from 'chai';
import Notification from '../../src/components/Notification';
import React from 'react';
import {shallow} from 'enzyme';

describe('notification', () => {
    it('shows notification', () => {
        const dismissNotification = () => {};
        const message = 'Hello world!';
        const alertType = 'info';
        const wrapper = shallow(<Notification alertType={alertType} message={message} onDismiss={dismissNotification}/>);
        expect(wrapper.find('div')).to.have.length(1);
    });
});
