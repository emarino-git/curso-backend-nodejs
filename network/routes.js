const express = require('express')

const products = require('../components/products/network');
const users = require('../components/users/network');
const categories = require('../components/categories/network');


function routerApi(server) {
  const router = express.Router();
  server.use('/api/v1', router)
  router.use('/products', products);
  router.use('/users', users);
  router.use('/categories', categories);
};

module.exports = routerApi;
