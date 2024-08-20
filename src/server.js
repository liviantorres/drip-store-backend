const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes'); 


const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();


app.use(bodyParser.json());


app.use('/v1/user', userRoutes); 
app.use('/v1/product', productRoutes); 
app.use('/v1/category', categoryRoutes); 
app.use('/v1/auth', authRoutes);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
