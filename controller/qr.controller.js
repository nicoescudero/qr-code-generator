const qrcode = require('qrcode');
const { catchAsync } = require('../helpers/catchAsync');

module.exports = {
  post: catchAsync(async (req, res) => {
    try {
      const { link } = req.body;
      const qr = await qrcode.toDataURL(link);
      return res.render('reply', { qr });
    } catch (error) {
      return res.render('error');
    }
  }),
  get: catchAsync(async (req, res) => {
    try {
      res.render('index');
    } catch (error) {
      res.render('error');
    }
  }),
};
