import React from 'react';
import { HomeSceneComponent } from './index';
import { shallow } from 'enzyme';
import { SORT_PARAMS } from '../constants';

describe('<HomeSceneComponent />', () => {
    it('should render home component with loader', () => {
        const props = {
            classes: expect.any(Object),
            loading: true,
            fetchMovies: jest.fn(),
            error: '',
            movies: []
        };

        const wrapper = shallow(<HomeSceneComponent {...props} />);

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
            fetchMovies: jest.fn(),
            error: '',
            movies,
            total: 20
        };

        const wrapper = shallow(<HomeSceneComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('changeSortParam should change state', async () => {
        const props = {
            classes: expect.any(Object),
            loading: true,
            fetchMovies: jest.fn(),
            error: '',
            movies: []
        };

        const event = {
            currentTarget: {
                value: SORT_PARAMS.rating
            }
        };

        const wrapper = shallow(<HomeSceneComponent {...props} />);

        wrapper.instance().changeSortParam(event);

        expect(wrapper.state().sortParam).toEqual(SORT_PARAMS.rating);
    });
});
