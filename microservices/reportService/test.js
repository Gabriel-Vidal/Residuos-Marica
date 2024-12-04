// Teste básico para garantir que o serviço de relatórios está funcionando
const request = require('supertest');
const app = require('./index'); // Ou apenas importe seu app

describe('GET /api/report', () => {
  it('Deve gerar o relatório de reciclagem', async () => {
    const response = await request(app).get('/api/report');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('city');
    expect(response.body).toHaveProperty('totalRecycled');
    expect(response.body).toHaveProperty('recyclingRate');
  });
});
