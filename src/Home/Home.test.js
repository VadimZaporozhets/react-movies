import React from 'react';
import { HomeSceneComponent } from './index';
import { shallow } from 'enzyme';
import '@babel/polyfill';

describe('<HomeSceneComponent />', () => {
    let props, wrapper;

    beforeEach(() => {
        props = {
            classes: {
                home: {},
                progress: {}
            }
        };

        wrapper = shallow(<HomeSceneComponent {...props} />);
    });

    it('should render home component with loader', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render home component with movie tiles pane', () => {
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

        wrapper.setState({
            movies
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('componentDidMount should load movies', async () => {
        await wrapper.instance().componentDidMount();

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
