import UserSidebar from './UserSidebar';
import UserProfile from './UserProfile';

describe('UserProfile exports and imports', () => {
    it('UserSidebar should be a function', () => {
        console.log("UserSidebar is: ", UserSidebar);
        expect(typeof UserSidebar).toBe('function');
    });

    it('UserProfile should be a function', () => {
        expect(typeof UserProfile).toBe('function');
    });
});
