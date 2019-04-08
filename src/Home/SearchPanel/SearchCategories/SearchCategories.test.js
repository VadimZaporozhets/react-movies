import React from 'react';
import { SearchCategoriesComponent } from './index';
import { shallow } from 'enzyme';

describe('<SearchCategoriesComponent />', () => {
    let props, wrapper;

    beforeEach(() => {
        props = {
            classes: {
                marginRight: {}
            },
            searchBy: 'Title'
        };

        wrapper = shallow(<SearchCategoriesComponent {...props} />);
    });

    it('should render search categories component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render sort by title button with contained variant', () => {
        expect(wrapper.find('#search-by-title').prop('variant')).toEqual('contained');
    });
});
