const { Kafka } = require('kafkajs')
exports.kafka = new Kafka({
    ssl: true,
    clientId: 'my-ola-app', // name of the app
    brokers: ['10.7.210.25:9092'] // port at which it will be running
})