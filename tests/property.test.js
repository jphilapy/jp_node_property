const request = require('supertest')
const app = require('../src/app')
const Property = require('../src/models/property')
const { 
    userOneId, 
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase,

} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create property for user', async () => {
    const response = await request(app)
        .post('/properties')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'myhouse'
        })
        .expect(201)

    const property = await Property.findById(response.body._id)
    expect(property).not.toBeNull()
    expect(property.name).toBe('myhouse')
})