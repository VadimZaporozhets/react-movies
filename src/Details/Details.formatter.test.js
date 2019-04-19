import { formatMovieData, formatMovies } from './Details.formatter';

describe('formatMovies', () => {
    it('should format movie array', () => {
        const input = [
            {
                budget: 0,
                genres: ['Action', 'Adventure', 'Science Fiction'],
                id: 447365,
                overview:
                    "The third film based on Marvel's Guardians of the Galaxy.",
                poster_path:
                    'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
                release_date: '2020-05-01',
                revenue: 0,
                runtime: null,
                tagline: '',
                title: 'Guardians of the Galaxy Vol. 3',
                vote_average: 0,
                vote_count: 9
            },
            {
                budget: 0,
                genres: ['Science Fiction', 'Action', 'Adventure'],
                id: 424785,
                overview: 'Plot unknown.',
                poster_path:
                    'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
                release_date: '2019-06-26',
                revenue: 0,
                runtime: null,
                tagline: '',
                title: 'Transformers 7',
                vote_average: 0,
                vote_count: 0
            }
        ];

        const expectedOutput = [
            {
                id: 447365,
                title: 'Guardians of the Galaxy Vol. 3',
                poster_path:
                    'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
                releaseYear: '2020',
                genres: ['Action', 'Adventure', 'Science Fiction'],
                vote_average: 0
            },
            {
                id: 424785,
                title: 'Transformers 7',
                poster_path:
                    'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
                releaseYear: '2019',
                genres: ['Science Fiction', 'Action', 'Adventure'],
                vote_average: 0
            }
        ];

        expect(formatMovies(input)).toEqual(expectedOutput);
    });
});

describe('formatMovieData', () => {
    it('should format movie details', () => {
        const input = {
            budget: 0,
            genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
            id: 287947,
            overview: 'mock'.repeat(100),
            poster_path:
                'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg',
            release_date: '2019-04-05',
            revenue: 0,
            runtime: null,
            tagline: '',
            title: 'Shazam!',
            vote_average: 0,
            vote_count: 5
        };

        const expectedOutput = {
            title: 'Shazam!',
            poster_path:
                'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg',
            vote_average: 0,
            releaseYear: '2019',
            genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
            overview: 'mock'.repeat(100)
        };

        expect(formatMovieData(input)).toEqual(expectedOutput);
    });
});
