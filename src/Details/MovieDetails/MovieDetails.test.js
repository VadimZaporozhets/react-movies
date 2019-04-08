import React from 'react';
import { MovieDetailsComponent } from './index';
import { shallow } from 'enzyme';
import emptyImageUrl from './../../constants';

describe('<MovieDetailsComponent />', () => {
    it('should render movie details component with props', () => {
        const props = {
            title: 'Movie',
            releaseYear: '2006',
            poster_path: emptyImageUrl,
            genres: ['Action', 'Comedy'],
            vote_average: 5,
            overview: 'Test overview',
            classes: {
                media: {},
                link: {}
            }
        };

        const wrapper = shallow(<MovieDetailsComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render movie details with title and classes only', () => {
        const props = {
            title: 'Movie',
            classes: {
                media: {},
                link: {}
            }
        };

        const wrapper = shallow(<MovieDetailsComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});

