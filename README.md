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

## Install

```bash
$ npm i egg-passport-qgame
```

## Usage

```js
// {app_root}/config/plugin.js
exports.passportQGame = {
  enable: true,
  package: 'egg-passport-qgame',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.passportQGame = {
  key: '...',
  secret: '...',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/foxling/egg-passport-qgame/issues).

## License

[MIT](LICENSE)
