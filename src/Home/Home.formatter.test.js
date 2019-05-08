import { formatSearchRoute } from './Home.formatter';

describe('formatSearchRoute', () => {
    it('should format search route', () => {
        const expectedSearchRoute = '/search/test/title';

        expect(formatSearchRoute('test', 'title')).toEqual(expectedSearchRoute);
    });
});
