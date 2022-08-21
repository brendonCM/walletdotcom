const { User } = require('../../entities')

module.exports = dependencies => {

    const {
        usersRepository
    } = dependencies;
    if (!usersRepository) {
        throw new Error('The users repository should be exist in dependencies');
    }

    const execute = ({
        name,
        surname,
        email,
        nationality,
        username,
        password,
        balance
    }) => {
        const user = new User({
            name,
            surname,
            nationality,
            email,
            username,
            password,
            balance
        })

        return usersRepository.add(user);
    }

    return {
        execute
    }
}