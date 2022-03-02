const winston = require("winston");

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.simple(),
    winston.format.timestamp(),
    winston.format.printf(
      (info) => `${info.timestamp} | ${info.level} | ${info.message}`
    )
  ),
  transports: [
    new winston.transports.File({
      maxsize: 5200000,
      maxFiles: 1000,
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      maxsize: 5200000,
      maxFiles: 5000,
      filename: "logs/info.log",
      level: "info",
    }),
    new winston.transports.File({
      maxsize: 5200000,
      maxFiles: 5000,
      filename: "logs/debug.log",
      level: "debug",
    }),
  ],
});

module.exports = {logger};
