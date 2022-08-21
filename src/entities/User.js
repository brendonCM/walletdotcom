module.exports.User = class User {
    constructor ({
      userid,
      name = null,
      surname = null,
      email = null,
      username = null,
      password = null,
      balance = null,
      nationality = null
    }) {
      this.id = userid
      this.name = name
      this.surname = surname
      this.email = email
      this.username = username
      this.password = password,
      this.balance = balance,
      this.nationality = nationality
    }

    getBalance() {
      return this.balance
    }

    getContactList() {

    }
}