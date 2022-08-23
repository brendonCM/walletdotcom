const useCases = require('../useCases');
const repositories = require('../frameworks/repositories/firestore');
module.exports = {
    useCases,
    ...repositories
}