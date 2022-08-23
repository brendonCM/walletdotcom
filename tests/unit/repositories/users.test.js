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
        expect(addedUser.userid).toBeDefined();
        expect(addedUser.name).toBe(testUser.name);
        expect(addedUser.surname).toBe(testUser.surname);
        expect(addedUser.email).toBe(testUser.email);
        expect(addedUser.username).toBe(testUser.username);
        expect(addedUser.password).toBe(testUser.password);
        expect(addedUser.balance).toEqual(testUser.balance);
        expect(addedUser.nationality).toBe(testUser.nationality);

        const returnedUser = await usersRepository.getById(addedUser.userid);
        expect(returnedUser).toEqual(addedUser);
    })

    /*test('New user should be added and id returned', async () => {
        const testUser = new User({
            name: chance.name(),
            surname: chance.last(),
            email: chance.email(),
            username: chance.word(),
            password: "password",
            balance: 0.00,
            nationality: "Zimbabwe"
        });

        const id = await usersRepository.add(testUser);

        console.log(id)
    },29000)*/
})