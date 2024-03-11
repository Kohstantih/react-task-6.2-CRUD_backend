const combineRouters = require('koa-combine-routers');

const notes = require('./notes');

const router = combineRouters(
  notes,
);
  
  module.exports = router;
  