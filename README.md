# eslint-config-exeto [![Dependency Status][depstat-image]][depstat-url] [![Peer Dependency Status][peerdepstat-image]][peerdepstat-url]

> This repository is a fork of [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

**THIS PACKAGE IS NO LONGER MAINTAINED**

## Install

```bash
$ npm install --save-dev \
  eslint-config-exeto \
  eslint-plugin-jsx-a11y@^2.0.1 \
  eslint-plugin-import@^1.12.0 \
  eslint-plugin-react@^6.0.0 \
  eslint@^3.2.0
```

## Usage

Add one of the following in your `.eslintrc`:

- EcmaScript 6+ and React

```json
"extends": "exeto"
```

- EcmaScript 6+

```json
"extends": "exeto/base"
```

- EcmaScript 6+ and specificity for node

```json
"extends": "exeto/node"
```

- EcmaScript 5 and below

```json
"extends": "exeto/legacy"
```

## License

[MIT](LICENSE.md) © [Airbnb](https://github.com/airbnb) and [Timofey Dergachev](https://exeto.me/en)

[depstat-url]: https://david-dm.org/exeto-archive/eslint-config-exeto#info=Dependencies
[depstat-image]: https://img.shields.io/david/exeto-archive/eslint-config-exeto.svg?style=flat-square
[peerdepstat-url]: https://david-dm.org/exeto-archive/eslint-config-exeto?type=peer
[peerdepstat-image]: https://david-dm.org/exeto-archive/eslint-config-exeto/peer-status.svg?style=flat-square
