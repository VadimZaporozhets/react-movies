import React from 'react';
import { BackNavigationComponent } from './index';
import { shallow } from 'enzyme';

describe('<BackNavigationComponent />', () => {
    it('should render back navigation component', () => {
        const props = {
            classes: {
                wrapper: {},
                link: {}
            }
        };

        const wrapper = shallow(<BackNavigationComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
