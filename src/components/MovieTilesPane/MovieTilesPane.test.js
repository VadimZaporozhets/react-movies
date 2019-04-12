import React from 'react';
import { MovieTilesPane } from './index';
import { shallow } from 'enzyme';
import { emptyImageUrl } from '../../constants';

describe('<MovieTilesPane />', () => {
    it('should render movie tile pane with movies', () => {
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
            ]
        };

        const wrapper = shallow(<MovieTilesPane {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
