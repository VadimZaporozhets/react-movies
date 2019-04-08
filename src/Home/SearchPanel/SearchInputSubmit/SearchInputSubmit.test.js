import React from 'react';
import { SearchInputSubmitComponent } from './index';
import { shallow } from 'enzyme';

describe('<SearchInputSubmitComponent />', () => {
    it('should render search component', () => {
        const props = {
            classes: expect.any(Object)
        };

        const wrapper = shallow(<SearchInputSubmitComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
