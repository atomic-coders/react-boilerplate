import {spy} from 'sinon';
import {assert} from 'chai';
import {once} from '../../src/util/Util';

describe('Util#once', () => {
    it('calls the original function', () => {
        let callback = spy();
        let proxy = once(callback);
        proxy();
        assert.isTrue(callback.called);
    });
    it('calls the original function only once', function () {
        let callback = spy();
        let proxy = once(callback);
        proxy();
        proxy();
        assert(callback.calledOnce);
    });
});
