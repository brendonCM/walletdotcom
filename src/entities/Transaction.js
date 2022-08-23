// Logs for the payments that people make

module.exports.Transaction = class Transaction {
    constructor ({
      id,
      dateCreated = null.
      payment = {},
      content = {},
    }) {
      this.id = id
      this.dateCreated = dateCreated
      this.payment = payment
      this.content = content
    }
}