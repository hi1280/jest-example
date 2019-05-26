class AccountDao {
  // eslint-disable-next-line class-methods-use-this
  findOrNull(userId) {
    return userId;
  }
}

class Account {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}
module.exports = {
  AccountDao,
  Account
};
