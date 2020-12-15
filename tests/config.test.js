const request = require('supertest')
const app = require('../src/app')
const Config = require('../src/models/config')
const { userOneId, userOne, setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create config for site', async () => {
    const response = await request(app)
        .post('/config')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            title: 'My Property Management Site',
            phone: '777-777-7777',
            fax: '777-777-7777',
        })
        .expect(201)

    const config = await Config.findById(response.body._id)
    expect(config).not.toBeNull()
    expect(config.title).toEqual('My Property Management Site')
    expect(config.phone).toEqual('777-777-7777')
})