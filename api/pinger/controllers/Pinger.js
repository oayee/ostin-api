'use strict';

/**
 * A set of functions called "actions" for `Pinger`
 */

const _ = require('lodash');

module.exports = {
  pong: async (ctx) => {
    ctx.response.status = 200;
    ctx.send(_.omit(ctx.response, 'header'));
  }
};
