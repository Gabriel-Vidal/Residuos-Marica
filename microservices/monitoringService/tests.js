// Teste básico para garantir que o serviço de monitoramento está funcionando
const request = require('supertest');
const app = require('./index'); // Ou apenas importe seu app

describe('GET /api/monitor', () => {
  it('Deve retornar o status da coleta de resíduos', async () => {
    const response = await request(app).get('/api/monitor');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('city');
    expect(response.body).toHaveProperty('totalCollected');
  });
});
