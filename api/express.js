//to delete not needed installation
const express = require("express");
const { createServer } = require("http");
const app = express();
const server = createServer(app);

module.exports = {
    express, app, server
};