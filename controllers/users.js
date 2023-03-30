const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

module.exports = {
  listUsers: (req, res) => res.json(users),

  showUser: (req, res) => {
    let currentUser = users.find(user => user.id === parseInt(req.params.id));
    if (!currentUser) {
      res.status(404).send('User not found.');
    }
    return res.json(currentUser)
  },

  createUser: (req, res) => {
    sampleUser.id = users.length + 1;
    users.push(sampleUser);
    res.json(sampleUser);
  },

  updateUser: (req, res) => {
    let userId = parseInt(req.params.id);
    let currentUser = users.find(user => user.id === userId);
    if (!currentUser) {
      res.status(400).send('User not found.');
    } else {
      currentUser = {...currentUser, ...req.body};
      users.splice(userId - 1, 1, currentUser);
      return res.json(currentUser);
    }
  },
  
  deleteUser: (req, res) => {
    let userId = parseInt(req.params.id);
    let currentUser = users.find(user => user.id === userId);
    if (!currentUser) {
      res.status(400).send('User not found.');
    } else {
      users.splice(userId - 1, 1);
      return res.send('User deleted successfully.');
    }
  }
}