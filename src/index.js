'use strict';

module.exports.handler = async (event) => {

  const message  = `Hello ${event.id} ${event.name}! Keep being awesome!`;
  console.log(message);

  return {
    statusCode: 200,
    message,
  };
};
