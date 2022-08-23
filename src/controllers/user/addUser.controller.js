const { Response } = require('../../frameworks/common');

module.exports = dependencies => {

    const {
        useCases: {
            user: {
                addUserUseCase
            }
        }
    } = dependencies;

    return async (req, res) => {
        try {
            const {
                body = {}
            } = req;

            const {
                name,
                surname,
                email,
                username,
                password,
                nationality,
                balance
            } = body;

            console.log("here")

            const addUser = addUserUseCase(dependencies);
            console.log(dependencies)
            const response = await addUser.execute({
                name,
                surname,
                email,
                username,
                password,
                nationality,
                balance
            });

            console.log("response")

            
            res.json(new Response({
                status: true,
                content: response
            }))

            //next();

        } catch (err) {
            console.log(err) 
        }
    };
}