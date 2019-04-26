import React from 'react';
import { shallow } from 'enzyme';

import { withLoading } from './withLoading';

describe('withLoading', () => {
    it('should render loading indicator when loading flag activated', () => {
        const props = {
            loading: true
        };
        const WithLoadingComponent = withLoading(<div />);
        const wrapper = shallow(<WithLoadingComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component when loading flag is inactive', () => {
        const props = {
            loading: false
        };
        const WithLoadingComponent = withLoading(<div />);
        const wrapper = shallow(<WithLoadingComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
