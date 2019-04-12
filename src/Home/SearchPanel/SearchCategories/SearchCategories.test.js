import React from 'react';
import { SearchCategoriesComponent } from './index';
import { shallow } from 'enzyme';

describe('<SearchCategoriesComponent />', () => {
    it('should render search categories component', () => {
        const props = {
            classes: expect.any(Object),
            searchBy: 'Title'
        };

        const wrapper = shallow(<SearchCategoriesComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
