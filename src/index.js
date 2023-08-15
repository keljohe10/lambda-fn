'use strict';

module.exports.handler = async (event) => {

  const message = JSON.parse(event);
  console.log(event);

  return {
    statusCode: 200,
    message,
  };
};
