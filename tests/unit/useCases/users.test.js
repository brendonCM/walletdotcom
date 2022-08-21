const {
    user: {
        addUserUseCase,
    }
} = require('../../../src/useCases');

const Chance = require('chance');

const chance = new Chance();

describe('User use cases', () => {

    const mockUserRepo = {
        add: jest.fn(async user => ({
            ...user,
            userid: "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000"
        }))
    }

    const dependencies = {
        usersRepository: mockUserRepo
    }

    describe('Add user use case', () => {

        test('User should be added', async () => {
            // create a user data
            const testUserData = {
                name: chance.name(),
                surname: chance.last(),
                email: chance.email(),
                username: chance.word(),
                password: "password",
                balance: 0.00,
                nationality: "Zimbabwe"
            }

            // add a user using the use case
            const addedUser = await addUserUseCase(dependencies).execute(testUserData);

            // check the received data
            expect(addedUser).toBeDefined()
            expect(addedUser.userid).toBeDefined();
            expect(addedUser.name).toBe(testUserData.name);
            expect(addedUser.surname).toBe(testUserData.surname);
            expect(addedUser.email).toBe(testUserData.email);
            expect(addedUser.username).toBe(testUserData.username);
            expect(addedUser.password).toBe(testUserData.password);
            expect(addedUser.balance).toEqual(testUserData.balance);
            expect(addedUser.nationality).toBe(testUserData.nationality);


            // check that the dependencies called as expected
            const call = mockUserRepo.add.mock.calls[0][0];
            expect(call.userid).toBeUndefined();
            expect(call.name).toBe(testUserData.name);
            expect(call.surname).toBe(testUserData.surname);
            expect(call.email).toBe(testUserData.email);
            expect(call.username).toBe(testUserData.username);
            expect(call.password).toBe(testUserData.password);
            expect(call.balance).toEqual(testUserData.balance);
            expect(call.nationality).toBe(testUserData.nationality);
        })
    })
})