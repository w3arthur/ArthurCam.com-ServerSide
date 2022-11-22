//only for api
const mongoDB = require('./mongoDB');
const localFiles = require('./localFiles');
const webSocket = require('./webSocket');
const arduinoSerial = require('./arduinoSerial');
const arduinoIOT = require('./arduinoIOT');
const rtmpStream = require('./rtmpStream');
const comments = require('./comments');

module.exports = {
    mongoDB
    , localFiles
    , webSocket
    , arduinoSerial
    , arduinoIOT
    , rtmpStream
    , comments
};