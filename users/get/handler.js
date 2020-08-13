'use strict';
const jwt = require('jsonwebtoken');

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
        token: jwt.sign({ foo: 'bar' }, 'shhhhh'),
        requestHeaders: event.headers,
        requestBody: event.body,
        requestQs: event.qs 
      },
      null,
      2
    ),
  };
};
