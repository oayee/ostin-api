'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  send: async ctx => {
    await strapi.plugins['email'].services.email.send({
      to: 'ostinmail111@gmail.com',
      from: 'robbot@strapi.io',
      replyTo: 'no-reply@strapi.io',
      subject: 'Use strapi email provider successfully',
      text: 'Hello ',
      html: 'Hello world!'
    });
    ctx.response.status = 200;
    ctx.send(ctx.response);
  }
};
