'use strict';

module.exports.handler = async (event, context) => {

  const message  = `Hello ${event.firstName} ${event.lastName}! Keep being awesome!`;
  console.log(message);

  return {
    statusCode: 200,
    message,
  };
};
