const request = require('supertest');
const app = require('../server');

let token = '';

describe('User Routes', () => {
  beforeAll(async () => {
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'admin3',
        password: '123456',
      });
    token = loginResponse.body.token;
  });

  it('Deve listar todos os usuários (admin)', async () => {
    const response = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Deve atualizar um usuário (admin)', async () => {
    const response = await request(app)
      .put('/api/users/6750b1311ccad95ade348186')
      .set('Authorization', `Bearer ${token}`)
      .send({
        username: 'updateduser',
        role: 'admin'
      });
    expect(response.status).toBe(200);
    expect(response.body.username).toBe('updateduser');
  });

  it('Deve excluir um usuário (admin)', async () => {
    const response = await request(app)
      .delete('/api/users/6750b1311ccad95ade348186') 
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Usuário removido com sucesso');
  });
});
