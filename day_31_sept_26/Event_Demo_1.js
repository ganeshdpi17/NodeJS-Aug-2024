// EventEmitter is a class in events module
const { EventEmitter } = require('events');

// create an object of EventEmitter class
const eventEmitter = new EventEmitter();

// listen an event using on()
eventEmitter.on('customEvent1', function () {
    console.log('I am a listener for custom Event, i am using on() to listen')
})
eventEmitter.addListener('customEvent1', function () {
    console.log('I am a listener for custom Event, i am using addListener() to listen')
})

// trigger an event without any params
eventEmitter.emit('customEvent1')

// listen an event with params
eventEmitter.on('training', function (course, time, duration) {
    console.log(`This is ${course} training, the time is ${time}, duration is ${duration}`)
})
eventEmitter.emit('training','NodeJs','8.00 PM','2 months')
eventEmitter.emit('training','reactJs','7.00 AM','3 months')

