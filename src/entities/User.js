module.exports.User = class User {
    constructor ({
      name = null,
      surname = null,
      email = null,
      username = null,
      password = null,
      balance = null,
      nationality = null
    }) {
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