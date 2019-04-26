import React from 'react';
import { MovieDetailsComponent } from './index';
import { shallow } from 'enzyme';
import emptyImageUrl from './../../constants';

describe('<MovieDetailsComponent />', () => {
    it('should render movie details component when there is no error', () => {
        const props = {
            title: 'Movie',
            releaseYear: '2006',
            poster_path: emptyImageUrl,
            genres: ['Action', 'Comedy'],
            vote_average: 5,
            overview: 'Test overview',
            classes: expect.any(Object),
            error: ''
        };

        const wrapper = shallow(<MovieDetailsComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render error when it appears', () => {
        const props = {
            error: 'Error',
            classes: expect.any(Object)
        };

        const wrapper = shallow(<MovieDetailsComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
