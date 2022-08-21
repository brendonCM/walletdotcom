const Chance = require('chance');

const chance = new Chance();

const {
    cloneDeep
} = require('lodash');

const {
    usersRepository
} = require('../../../src/frameworks/repositories/inMemory');

const {
    User
} = require('../../../src/entities');

describe('Users repository', () => {
    test('New user should be added and returned', async () => {
        const testUser = new User({
            name: chance.name(),
            surname: chance.last(),
            email: chance.email(),
            username: chance.word(),
            password: "password",
            balance: 0.00,
            nationality: "Zimbabwe"
        });

        const addedUser = await usersRepository.add(testUser);

        expect(addedUser).toBeDefined();
        expect(addedUser.id).toBeDefined();
        expect(addedUser.name).toBe(testUser.name);
        expect(addedUser.lastName).toBe(testUser.lastName);
        expect(addedUser.gender).toBe(testUser.gender);
        expect(addedUser.meta).toEqual(testUser.meta);

        const returnedUser = await usersRepository.getById(addedUser.userid);
        expect(returnedUser).toEqual(addedUser);
    })
})