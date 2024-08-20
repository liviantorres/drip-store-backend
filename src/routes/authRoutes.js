// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController'); // Importando a função login

router.post('/login', login); // Usando a função login para a rota de login

module.exports = router;
