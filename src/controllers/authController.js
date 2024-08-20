
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models'); 

const secretKey = process.env.JWT_SECRET || 'your_jwt_secret_key';


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    
    const isMatch = await bcrypt.compare(password, this.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    
    const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor', error: err.message });
  }
};
