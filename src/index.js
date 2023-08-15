"use strict";

module.exports.handler = async (event) => {
  try {
    for (const record of event.Records) {
      const { body } = record;

      console.log("Received message:", body);
    }
    return {
      statusCode: 200,
      message: `Successfully processed ${event.Records.length} messages.`,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Message processing failed");
  }
};
