# eslint-config-exeto [![Dependency Status][depstat-image]][depstat-url]

> Eslint config based on the config Airbnb.

## Install

```bash
$ npm install --save-dev \
  eslint-config-exeto \
  eslint-plugin-react \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint
```

## Usage

Add one of the following in your `.eslintrc`.

### eslint-config-exeto

EcmaScript 6+ and React.

```json
{
  "extends": "exeto"
}
```

### eslint-config-exeto/base

EcmaScript 6+.

```json
{
  "extends": "exeto/base"
}
```

### eslint-config-exeto/node

EcmaScript 6+ and specificity for node.

```json
{
  "extends": "exeto/node"
}
```

### eslint-config-exeto/legacy

EcmaScript 5 and below.

```json
{
  "extends": "exeto/legacy"
}
```

## License

[MIT](LICENSE.md) © [Timofey Dergachev](http://exeto.me/)

[depstat-url]: https://david-dm.org/exeto/eslint-config-exeto#info=Dependencies
[depstat-image]: https://img.shields.io/david/exeto/eslint-config-exeto.svg?style=flat-square
