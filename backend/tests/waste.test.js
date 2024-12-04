const request = require('supertest');
const app = require('../server');

let token = '';

describe('Waste Routes', () => {
  beforeAll(async () => {

    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'password123',
      });
    token = loginResponse.body.token;
  });

  it('Deve criar um novo resíduo', async () => {
    const response = await request(app)
      .post('/api/wastes')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Resíduo Orgânico',
        category: 'orgânico',
        quantity: 100,
        description: 'Resíduos orgânicos coletados'
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('name', 'Resíduo Orgânico');
  });

  it('Deve listar todos os resíduos', async () => {
    const response = await request(app)
      .get('/api/wastes')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Deve atualizar um resíduo', async () => {
    const response = await request(app)
      .put('/api/wastes/6750a8e41715f170951ab2b6') 
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Resíduo Reciclável',
        category: 'reciclável',
        quantity: 50,
        description: 'Resíduos recicláveis'
      });
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Resíduo Reciclável');
  });

 
  it('Deve excluir um resíduo', async () => {
    const response = await request(app)
      .delete('/api/wastes/6750a8e41715f170951ab2b6') 
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Resíduo deletado com sucesso');
  });
});
