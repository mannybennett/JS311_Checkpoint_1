const users = require('../data/index')
const sampleUser = require('../data/sampleUser')

module.exports = {
  listUsers: (req, res) => res.json(users),
  showUser: (req, res) => res.json(users.find(user => user.id === parseInt(req.params.id))),
  createUser: (req, res) => {
    sampleUser.id = users.length + 1;
    users.push(sampleUser);
    res.json(sampleUser);
  },
  updateUser: (req, res) => {
    currentUser = users.find(user => user.id === parseInt(req.params.id));
    res.json(req.body)
  }
  // deleteUser:
}