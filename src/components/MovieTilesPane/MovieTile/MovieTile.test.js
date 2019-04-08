import React from 'react';
import { MovieTileComponent } from './index';
import { shallow } from 'enzyme';
import { emptyImageUrl } from '../../../constants';

describe('<MovieTile />', () => {
    it('should render movie tile component with props', () => {
        const props = {
            title: 'Movie',
            releaseYear: '2006',
            poster_path: emptyImageUrl,
            genres: ['Action', 'Comedy'],
            classes: {
                media: {},
                link: {}
            }
        };

        const wrapper = shallow(<MovieTileComponent {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render movie tile with title and classes only', () => {
        const props = {
            title: 'Movie',
            classes: {
                media: {},
                link: {}
            }
        };

        const wrapper = shallow(<MovieTileComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
