import React from 'react';
import { App } from './App';
import renderer from 'react-test-renderer';

describe('App component', () => {
    it('should render app container', () => {
        const wrapper = renderer.create(<App />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });
});