'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */




  

const nodemailer = require('nodemailer');

module.exports = {
  send: async ctx => {
    // await strapi.plugins['email'].services.email.send({
    //   to: 'ostinmail111@gmail.com',
    //   from: 'robbot@strapi.io',
    //   replyTo: 'no-reply@strapi.io',
    //   subject: 'Use strapi email provider successfully',
    //   text: 'Hello ',
    //   html: 'Hello world!'
    // });

    // const filename = '' + shopId + '_' + res.quiz + '_' + scheduleId + '.csv';
      // const firstStr = { q: 'адрес прохождения опроса', a: '' + res.shop + ' ' + res.location };
      // const b = [firstStr];
      // Object.keys(res.answer).forEach(key => {
      //   b.push(res.answer[key]);
      // });

      // jsonexport(b, { rename: ['вопрос', 'ответ'], rowDelimiter: ';' }, function (err, csv) {
      //   if (err) return console.log(err);

    async function main () {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ostinmail111@gmail.com', // generated ethereal user
          pass: 'mailmailmail' // generated ethereal password
        }
      });
  
      await transporter.sendMail({
        from: 'ostinmail111@google.com', // sender address
        // to: 'selass.selass.selass@gmail.com, eldar.mustafin@gmail.com, DKSmirnov@o-stin.ru', // list of receivers
        to: 'dengornik@gmail.com', // list of receivers
        subject: 'ostin answers', // Subject line
        text: 'sunshine and flowers'
        // attachments: [{ filename: filename, content: iconvlite.encode(csv, 'win1251') }]
      });
    }
  
    main().catch(console.error);
  // });

    ctx.response.status = 200;
    ctx.send(ctx.response);
  }
};
