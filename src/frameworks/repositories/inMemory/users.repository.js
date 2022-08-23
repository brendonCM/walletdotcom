const {
    inMemory: inMemoryDb
} = require('../../database');


module.exports = {
    add: async user => {
        if (!user.userid) {
            user.userid = "11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000";
        }
        inMemoryDb.users.push(user);
        return user;
    },
    getById: async id => {
        return inMemoryDb.users.find(item => item.userid === id);
    }
}