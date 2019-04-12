import React from 'react';
import { SortResultsPanelComponent } from './index';
import { shallow } from 'enzyme';

describe('<SortResultsPanelComponent />', () => {
    it('should render sort panel component', () => {
        const props = {
            classes: expect.any(Object)
        };

        const wrapper = shallow(<SortResultsPanelComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
