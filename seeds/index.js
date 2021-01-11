const path = require('path')
const mongoose = require('mongoose')


const Property = require('../src/models/property')
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(err => console.log(err))

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Property.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const rent = Math.floor(Math.random() * 20) + 10
        const deposit = Math.floor(Math.random() * 20) + 10
        const zipcode = Math.floor(Math.random() * 20) + 5
        const camp = new Property({
            title: `${sample(descriptors)} ${sample(places)}`,
            availability: 'Now',
            address: '123 SoSo St.',
            city: `${cities[random1000].city}`,
            state: `${cities[random1000].state}`,
            zipcode,
            country: 'USA',
            bdrm: '1',
            bath: '1',
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorum qui sapiente labore nisi laboriosam nam velit est consequatur iusto dolore dolor atque, consequuntur eos repellendus aliquam consectetur nemo. Deleniti.',
            rent,
            deposit,
            remarks: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolorum qui sapiente labore nisi laboriosam nam velit est consequatur iusto dolore dolor atque, consequuntur eos repellendus aliquam consectetur nemo. Deleniti.'
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})
