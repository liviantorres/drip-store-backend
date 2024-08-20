const bcrypt = require('bcryptjs');

const testPasswordComparison = async () => {
    const plainPassword = 'senha';
    const hashedPassword = '$2a$10$ninn9yaoxr0GyeFN8923VuUzxSRlx0agGE8sNr..jCOKq/1FxakmC';

    console.log('Senha criptografada:', '$2a$10$ninn9yaoxr0GyeFN8923VuUzxSRlx0agGE8sNr..jCOKq/1FxakmC');
    console.log('Comparação:', await bcrypt.compare(plainPassword, hashedPassword));
};

testPasswordComparison();
