import React from 'react';
import { SortResultsPanelComponent } from './index';
import { shallow } from 'enzyme';

describe('<SortResultsPanelComponent />', () => {
    it('should render sort panel component', () => {
        const props = {
            classes: {
                marginRight: {},
                paperWrapper: {},
                marginBottom: {}
            }
        };

        const wrapper = shallow(<SortResultsPanelComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
