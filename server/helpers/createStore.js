import { createStore } from 'redux';
import { createMemoryHistory } from 'history';

import { reducer } from '../../src/store/reducer';

export const initStore = ({ url }) => {
    const history = createMemoryHistory({
        initialEntries: [url]
    });

    return createStore(reducer(history));
};
