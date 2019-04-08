import React from 'react';
import { SearchPanelComponent } from './index';
import { shallow } from 'enzyme';

describe('<SearchPanelComponent />', () => {
    it('should render search panel component', () => {
        const props = {
            classes: {
                marginBottom: {},
                panel: {}
            }
        };

        const wrapper = shallow(<SearchPanelComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});