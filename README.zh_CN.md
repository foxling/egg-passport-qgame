# egg-passport-qgame

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-qgame.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-qgame
[travis-image]: https://img.shields.io/travis/foxling/egg-passport-qgame.svg?style=flat-square
[travis-url]: https://travis-ci.org/foxling/egg-passport-qgame
[codecov-image]: https://img.shields.io/codecov/c/github/foxling/egg-passport-qgame.svg?style=flat-square
[codecov-url]: https://codecov.io/github/foxling/egg-passport-qgame?branch=master
[david-image]: https://img.shields.io/david/foxling/egg-passport-qgame.svg?style=flat-square
[david-url]: https://david-dm.org/foxling/egg-passport-qgame
[snyk-image]: https://snyk.io/test/npm/egg-passport-qgame/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-qgame
[download-image]: https://img.shields.io/npm/dm/egg-passport-qgame.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-qgame

passport-qgame strategy for egg-passport

## 开启插件

```js
// config/plugin.js
exports.passportQGame = {
  enable: true,
  package: 'egg-passport-qgame',
};
```

```js
// {app_root}/config/config.default.js
exports.passportQGame = {
  key: '...',
  secret: '...',
};
```

## 使用场景

客户端授权后，拿到 code，提交给服务端。
passport-qgame 根据 code 请求 access_token 并且返回 vivo 用户信息。

```json
{
  "provider": "qgame",
  "expires_in": 86400,
  "refresh_token": "...",
  "access_token": "...",
  "nickname": "...",
  "openid": "...",
  "avatar": "..."
}
```

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 提问交流

请到 [egg issues](https://github.com/foxling/egg-passport-qgame/issues) 异步交流。

## License

[MIT](LICENSE)
