import React from 'react';
import { MovieTileComponent } from './index';
import { shallow } from 'enzyme';
import { emptyImageUrl } from '../../../constants';

describe('<MovieTile />', () => {
    it('should render movie tile component', () => {
        const props = {
            title: 'Movie',
            releaseYear: '2006',
            poster_path: emptyImageUrl,
            genres: ['Action', 'Comedy'],
            classes: expect.any(Object),
            id: 1,
            vote_average: 8.5
        };

        const wrapper = shallow(<MovieTileComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
