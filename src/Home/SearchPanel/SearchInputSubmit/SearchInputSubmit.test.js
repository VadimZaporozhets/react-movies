import React from 'react';
import { SearchInputSubmitComponent } from './index';
import { shallow } from 'enzyme';
import { SEARCH_BY_PARAMS } from '../../../constants';

describe('<SearchInputSubmitComponent />', () => {
    it('should render search component', () => {
        const props = {
            classes: expect.any(Object),
            onSubmit: jest.fn(),
            searchBy: SEARCH_BY_PARAMS.title
        };

        const wrapper = shallow(<SearchInputSubmitComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
