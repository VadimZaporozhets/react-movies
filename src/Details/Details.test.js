import React from 'react';
import { DetailsSceneComponent } from './index';
import { shallow } from 'enzyme';

describe('<DetailsSceneComponent />', () => {
    let props, wrapper;

    beforeEach(() => {
        props = {
            classes: expect.any(Object)
        };

        wrapper = shallow(<DetailsSceneComponent {...props} />);
    });

    it('should render details component with loaders', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render details component with movie details and movies pane', () => {
        const movies = [
            {
                id: 447365,
                title: 'Guardians of the Galaxy Vol. 3',
                poster_path:
                    'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
                releaseYear: '2020',
                genres: ['Action', 'Adventure', 'Science Fiction']
            },
            {
                id: 424785,
                title: 'Transformers 7',
                poster_path:
                    'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
                releaseYear: '2019',
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

        wrapper.setState({
            movies,
            details
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('componentDidMount should load movies and details', async () => {
        await wrapper.instance().componentDidMount();

        expect(wrapper.state().details).toMatchObject({
            title: expect.any(String),
            poster_path: expect.any(String),
            vote_average: expect.any(Number),
            releaseYear: expect.any(String),
            overview: expect.any(String),
            genres: expect.any(Array)
        });

        expect(wrapper.state().movies).toContainEqual(
            expect.objectContaining({
                id: expect.any(Number),
                title: expect.any(String),
                poster_path: expect.any(String),
                releaseYear: expect.any(String),
                genres: expect.any(Array)
            })
        );
    });
});
