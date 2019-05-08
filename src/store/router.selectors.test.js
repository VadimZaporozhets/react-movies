import { selectPathname } from './router.selectors';

const store = {
    router: {
        location: {
            pathname: '/some-route'
        }
    }
};

describe('selectPathname', () => {
    it('should derive pathname from state', () => {
        const expectedPathname = '/some-route';

        expect(selectPathname(store)).toEqual(expectedPathname);
    });
});
