import { createMocks } from 'node-mocks-http';
import handleUser from '../../../pages/api/user';
const Chance = require('chance');

describe('Testing user controller', () => {
    test('returns user when requesting user', async () => {
        const {req, res} = createMocks({
            method: 'GET',
        })

        await handleUser(req,res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
              name: 'brendon',
            }),
        );
    })

    test('Calls post request when returning data', async () => {
        const {req, res} = createMocks({
            method: 'POST',
            body: {
                name: chance.name(),
                surname: chance.last(),
                email: chance.email(),
                username: chance.word(),
                password: "password",
                balance: 0.00,
                nationality: "Zimbabwe"
            }
        })

        await handleUser(req,res);

        expect(res._getStatusCode()).toBe(200);
        
    })
})