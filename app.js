'use strict';

const assert = require('assert');
const debug = require('debug')('egg-passport-qgame');
const QgameStrategy = require('passport-qgame').Strategy;

module.exports = app => {
  const config = app.config.passportQgame;
  config.passReqToCallback = true;

  assert(config.key, '[egg-passport-qgame] config.passportQgame.key required');
  assert(config.secret, '[egg-passport-qgame] config.passportQgame.secret required');

  app.passport.use(new QgameStrategy(config, (req, user, done) => {
    const ret = {
      provider: 'qgame',
      user,
    };

    debug('%s %s get user: %j', req.method, req.url, ret);

    app.passport.doVerify(req, ret, done);
  }));
};
