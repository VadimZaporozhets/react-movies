import React from 'react';
import { DetailsSceneComponent } from './index';
import { shallow } from 'enzyme';

describe('<DetailsSceneComponent />', () => {
    it('should render details component with loaders', () => {
        const props = {
            classes: expect.any(Object),
            fetchDetails: jest.fn(),
            details: {},
            match: {
                params: {
                    id: 1
                }
            },
            loadingDetails: true,
            loadingMovies: true,
            similarMoviesError: '',
            detailsError: '',
            similarMovies: []
        };

        const wrapper = shallow(<DetailsSceneComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render details component with movie details and movies pane', () => {
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

        const details = {
            title: 'Shazam!',
            poster_path:
                'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg',
            vote_average: 0,
            releaseYear: '2019',
            genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
            overview: 'mock'.repeat(100)
        };

        const props = {
            classes: expect.any(Object),
            fetchDetails: jest.fn(),
            details,
            match: {
                params: {
                    id: 1
                }
            },
            loadingDetails: false,
            loadingMovies: false,
            similarMoviesError: '',
            detailsError: '',
            similarMovies: movies
        };

        const wrapper = shallow(<DetailsSceneComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
