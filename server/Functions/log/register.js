const { logger } = require("./logger");

const registerLogger = (level, data, action) => {
  switch (level) {
    case "info":
      console.log("Register Logger: INFO");
      logger.info(
        `Registro ${action}: Tipo -> ${data}, codigo-> ${data.codigo}`
      );
      break;
    case "debug":
      console.log("Register Logger: DEBUG");
      logger.debug(
        `Registro ${action}: Tipo -> ${data}, codigo-> ${data.codigo}`
      );
      break;
    case "error":
      console.log("Register Logger: ERROR");
      logger.error(`${data.stack}`);
      break;
  }
};

module.exports = { registerLogger };
