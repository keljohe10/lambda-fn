'use strict';

module.exports.handler = async (event) => {
  console.log('Hello World: ', event);
  return {
    statusCode: 200,
  };
};
