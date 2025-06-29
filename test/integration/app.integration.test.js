const request = require('supertest');
const app = require('../../src/app');

describe('Integration Tests', () => {
  test('Sum endpoint full flow', async () => {
    const res = await request(app).get('/sum?a=10&b=5');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(15);
  });

  test('Subtract endpoint full flow', async () => {
    const res = await request(app).get('/subtract?a=20&b=8');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(12);
  });
});
