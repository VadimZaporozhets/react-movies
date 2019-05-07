import React from 'react';
import { HomeSceneContainer } from './index';
import { shallow } from 'enzyme';
import { SORT_PARAMS } from '../constants';

describe('<HomeSceneContainer />', () => {
    it('should render home component with loader', () => {
        const props = {
            classes: expect.any(Object),
            loading: true,
            push: jest.fn(),
            error: '',
            movies: [],
            onSortParamChange: jest.fn(),
            sortParam: SORT_PARAMS.releaseDate
        };

        const wrapper = shallow(<HomeSceneContainer {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render home component with movie tiles pane', () => {
        const movies = [
            {
                id: 447365,
                title: 'Guardians of the Galaxy Vol. 3',
                poster_path:
                    'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
                release_date: '2020-12-12',
                genres: ['Action', 'Adventure', 'Science Fiction']
            },
            {
                id: 424785,
                title: 'Transformers 7',
                poster_path:
                    'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
                release_date: '2019-12-12',
                genres: ['Science Fiction', 'Action', 'Adventure']
            }
        ];

        const props = {
            classes: expect.any(Object),
            loading: false,
            push: jest.fn(),
            error: '',
            movies,
            total: 20,
            onSortParamChange: jest.fn(),
            sortParam: SORT_PARAMS.releaseDate
        };

        const wrapper = shallow(<HomeSceneContainer {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
