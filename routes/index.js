'use strict';

// Third party modules
const express = require('express');
const router = express.Router();

const routes = require('./project-routes/ranger-clone'); 

routes.forEach( ({ method, route, fn }) => {

  router[method](route, fn);
});

module.exports = router;