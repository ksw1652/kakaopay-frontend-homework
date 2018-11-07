"use strict";

module.exports = function (data) {

  // Get access to `req`, `res`, & `sails`
  let req = this.req;
  let res = this.res;

  // Set status code
  res.status(408);

  // If appropriate, serve data as JSON(P)
  return res.send(data || {
      name: 'RequestTimeout',
      message: 'The server timed out waiting for the request.'
    });
};