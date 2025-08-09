// service/userService.js
const users = require('../model/userModel');

function findUserByUsername(username) {
  return users.find(u => u.username === username);
}

function registerUser({ username, password, isFavorecido }) {
  if (findUserByUsername(username)) {
    throw new Error('Usuário já existe');
  }
  const user = { username, password, isFavorecido: !!isFavorecido, balance: 10000 };
  users.push(user);
  return user;
}

function loginUser({ username, password }) {
  const user = findUserByUsername(username);
  if (!user || user.password !== password) {
    throw new Error('Login ou senha inválidos');
  }
  return user;
}

function getAllUsers() {
  return users.map(u => ({ username: u.username, isFavorecido: u.isFavorecido, balance: u.balance }));
}

module.exports = { registerUser, loginUser, getAllUsers, findUserByUsername };
