'use strict';

module.exports.handler = async (event) => {
  const { body } = event;

  console.log(event, body);

  return {
    statusCode: 200,
  };
};
