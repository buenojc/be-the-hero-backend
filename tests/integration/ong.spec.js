const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.latest()
  })

  it('should be able to create a new ong', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'UIPA',
        email: 'uipa@upa.com',
        whatsapp: '11980967992',
        city: 'Ribeirão Preto',
        uf: 'SP'
      })

    console.log(response.body)
  })
})
