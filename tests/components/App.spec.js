import {expect} from 'chai';
import React from 'react';
import {mount} from 'enzyme';
import {App} from '../../src/components/App';

describe('app router', () => {
    it('shows app contents', () => {
        const context = {
            router: {
                listen: () => { },
                createHref: () => {},
                isActive: () => {
                    return false;
                }
            }
        };
        const wrapper = mount(<App><p id="child">Hello world!</p></App>, {context});
        expect(wrapper.find('#child').text()).to.be.equals('Hello world!');
    });
});
