import React from 'react';
import { SortResultsPanelComponent } from './index';
import { shallow } from 'enzyme';
import { SORT_PARAMS } from '../../constants';

describe('<SortResultsPanelComponent />', () => {
    it('should render sort panel component', () => {
        const props = {
            classes: expect.any(Object),
            onSortParamChange: jest.fn(),
            currentSortParam: SORT_PARAMS.releaseDate,
            total: 20
        };

        const wrapper = shallow(<SortResultsPanelComponent {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
