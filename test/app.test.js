const request = require('supertest');
const app = require('../src/app');

describe('Endpoints', () => {
  test('GET /ping', async () => {
    const res = await request(app).get('/ping');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'pong');
  });

  test('GET /sum with valid params', async () => {
    const res = await request(app).get('/sum?a=5&b=3');
    expect(res.body.result).toBe(8);
  });

  test('GET /subtract with valid params', async () => {
    const res = await request(app).get('/subtract?a=5&b=3');
    expect(res.body.result).toBe(2);
  });

  test('GET /sum missing params', async () => {
    const res = await request(app).get('/sum?a=5');
    expect(res.statusCode).toBe(400);
  });

  test('GET /unknown route', async () => {
    const res = await request(app).get('/doesnotexist');
    expect(res.statusCode).toBe(404);
  });
});
