import React from 'react';
import { MovieTilesPane } from './index';
import { shallow } from 'enzyme';
import { emptyImageUrl } from '../../constants';

describe('<MovieTilesPane />', () => {
    it('should render movie tile pane with movies when no error found', () => {
        const props = {
            title: 'Title',
            movies: [
                {
                    title: 'Shazam',
                    poster_path: emptyImageUrl,
                    id: '1',
                    genres: ['Action', 'Comedy'],
                    releaseYear: '2006'
                },
                {
                    title: 'Star Wars',
                    poster_path: emptyImageUrl,
                    id: '2',
                    genres: ['Action', 'Comedy'],
                    releaseYear: '2013'
                }
            ],
            error: ''
        };

        const wrapper = shallow(<MovieTilesPane {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render error when it appears', () => {
        const props = {
            title: 'Title',
            movies: [],
            error: 'error'
        };

        const wrapper = shallow(<MovieTilesPane {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
