import db from '../../../utils/db/firestore';

const entityName = 'users'
const usersDb = db.collection(entityName);

const repository = () => {
  
    // Crud executables
    return {

      add: async user => {
        
        /*const users = await db.collection(entityName).get();
        const usersData = users.docs.map(user => user.data());
        if (usersData.some(user => user.email === newUser.email)) {
          return 'user not added'
        } else {
            const { id } = await db.collection(entityName).add({
              newUser,
              created: new Date().toISOString(),
            });
            return id
        }*/
        // Check if user exists

        // Adds user if they don't exists
        const res = await usersDb.add(JSON.parse(JSON.stringify({
          user,
          dateCreated: new Date().toISOString(),
          updateAt: new Date().toISOString(),
          lastAccessed: new Date().toISOString(),
          loginAttempts: 0
        })));

        if(res.id){
          return res.id;
        } else{
          return 'user not added';
        }
      },
      getById: async id => {

        // get the users info by using the id
        const res = await usersDb.doc(id).get();
        if (!res.exists) {
          return 'user does not exist';
        } else {
          return res.data();
        }
      }
  }
}
  
module.exports = repository()