const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

describe('getting current gameStatus', () => {
    test('returns status in json', async () => {
        await api
            .get('/api/game')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('returns 2 properties', async () => {
        const response = await api.get('/api/game')

        expect(response.body.length).toBe(1)
    })

    test('returns status as a property', async () => {
        const response = await api.get('/api/game')

        expect(response.body[0]).toMatchObject({

            "status": expect.anything()
        })
    })

    afterAll(() => {
        mongoose.connection.close()
      })
})