import React from 'react';
import { shallow } from 'enzyme';

import { PageNotFound } from './PageNotFound';

describe('PageNotFound', () => {
    it('should render PageNotFound component', () => {
        const wrapper = shallow(<PageNotFound />);

        expect(wrapper).toMatchSnapshot();
    });
});
