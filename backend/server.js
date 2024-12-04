const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const wasteRoutes = require('./routes/wasteRoutes');
const userRoutes = require('./routes/userRoutes');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');


require('dotenv').config();


const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/wastes', wasteRoutes);
app.use('/api/users', userRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('Conectado ao MongoDB'))
  .catch((error) => console.error('Erro ao conectar:', error));

app.use('/api/auth', authRoutes);

app.get('/api/protected', authMiddleware, (req, res) => {
  res.send(`Bem-vindo! Você tem acesso à rota protegida como ${req.user.role}.`);
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

console.log('Documentação disponível em: http://localhost:3000/api-docs');

