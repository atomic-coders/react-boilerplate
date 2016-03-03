import {expect} from 'chai';
import appReducers from '../../src/reducers/AppReducers';

describe('notifications', () => {
    it('shows notification', () => {
        const state = appReducers({}, {type: 'Notification', payload: {type: 'test', message: 'message'}});
        expect(state.alertType).to.be.equal('test');
        expect(state.message).to.be.equal('message');
    });

    it('dismisses notification', () => {
        const state = appReducers({}, {type: 'Notification', payload: {type: 'test', message: 'message'}});
        const newState = appReducers(state, {type: 'DismissNotification'});
        expect(newState.alertType).to.be.undefined;
        expect(newState.message).to.be.undefined;
    });
});
