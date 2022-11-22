const mongoDB = require('./mongoDB');
const localFiles = require('./localFiles');
const webSocket = require('./webSocket');
const express = require('./express');
const arduinoIOT = require('./arduinoIOT');
module.exports = { 
    mongoDB, localFiles, webSocket, express, arduinoIOT
};