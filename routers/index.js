const rtmpAuthRouter = require('./rtmpAuth.router');
const arduinoSerialRouter = require('./arduinoSerial.router');
const  commentsRouter = require('./comments.router');
const arduinoIOTRouter = require('./arduinoIOT.router');
module.exports = { 
    rtmpAuthRouter, arduinoSerialRouter, arduinoIOTRouter, commentsRouter
};