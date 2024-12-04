const request = require('supertest');
const app = require('../server'); 

describe('Auth Routes', () => {
  let token = '';


  it('Deve registrar um novo usuário', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'password123',
        role: 'user'
      });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Usuário criado com sucesso!');
  });


  it('Deve fazer login e gerar um token', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'password123',
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    token = response.body.token; // Salva o token para testes futuros
  });

  
  it('Não deve fazer login com senha incorreta', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'wrongpassword',
      });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Senha incorreta');
  });
});
