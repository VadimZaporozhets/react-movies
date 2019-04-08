import React from 'react';
import { DetailsSceneComponent } from './index';
import { shallow } from 'enzyme';
import '@babel/polyfill';

describe('<DetailsSceneComponent />', () => {
    let props, wrapper;

    beforeEach(() => {
        props = {
            classes: {
                details: {},
                progress: {}
            }
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
            overview:
                "We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's case, by shouting out one word--SHAZAM!--this streetwise 14-year-old foster kid can turn into the adult superhero Shazam, courtesy of an ancient wizard.Still a kid at heart--inside a ripped, godlike body--Shazam revels in this adult version of himself by doing what any teen would do with superpowers: have fun with them! Can he fly? Does he have X-ray vision? Can he shoot lightning out of his hands? Can he skip his social studies test? Shazam sets out to test the limits of his abilities with the joyful recklessness of a child. But he'll need to master these powers quickly in order to fight the deadly forces of evil controlled by Doctor Thaddeus Sivana."
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
