// src/services/userService.js
const { User } = require('../models'); // Ajuste o caminho conforme sua estrutura
const { generateToken } = require('./authService');
const bcrypt = require('bcryptjs');

// Função para autenticar um usuário
const authenticateUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) {
    throw new Error('User not found');
  }
  
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  
  return user;
};

// Função para obter um token JWT para um usuário
const getTokenForUser = async (email, password) => {
  const user = await authenticateUser(email, password);
  return generateToken(user);
};

module.exports = {
  authenticateUser,
  getTokenForUser
};
