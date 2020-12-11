require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const logsRouter = require("./logs/logs-router");
const ioService = require("./ioService");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

function getIo() {
  return io;
}

const morganOption = (NODE_ENV === 'production')
? 'tiny'


ioService.setUpIo(io);

app.use(helmet());
app.use(cors());

app.use("/api/logs", logsRouter);

app.use(function errorHandler(error, req, res, next) {
  res.status(500).json(response);
});

module.exports = {server, app, getIo};
