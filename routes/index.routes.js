const { Router } = require('express');
const { get, post } = require('../controller/qr.controller');

const routes = Router();

routes.get('/', get);
routes.post('/create-qr', post);

module.exports = routes;
