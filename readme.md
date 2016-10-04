# faique
[![Build Status](https://travis-ci.org/millette/faique.svg?branch=master)](https://travis-ci.org/millette/faique)
[![Coverage Status](https://coveralls.io/repos/github/millette/faique/badge.svg?branch=master)](https://coveralls.io/github/millette/faique?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/faique.svg)](https://gemnasium.com/github.com/millette/faique)
> FAI (ISP) in Québec.

## Install
```
$ npm install --save faique
```

## Now with update-notifier
The cli now uses [update-notifier][] to let the user know about updates to this program.

Users have the ability to opt-out of the update notifier by changing
the optOut property to true in ~/.config/configstore/update-notifier-rollodeqc-gh-user-streak.json.
The path is available in notifier.config.path.

Users can also opt-out by setting the environment variable NO_UPDATE_NOTIFIER
with any value or by using the --no-update-notifier flag on a per run basis.

## Usage
```js
const faique = require('faique')

const jsonlog = (x) => console.log(JSON.stringify(x, null, ' '))
faique.ebox('H3A0G4')
  .then(jsonlog)
//=> ...

faique.teksavvy('H3A0G4')
  .then(jsonlog)
//=> ...

faique.acanac('H3A0G4')
  .then(jsonlog)
//=> ...

```

## API
### faique.ebox(postalcode)
#### postalcode
Type: `string`

Lorem ipsum.

### faique.teksavvy(postalcode)
#### postalcode
Type: `string`

Lorem ipsum.

### faique.acanac(postalcode)
#### postalcode
Type: `string`

Lorem ipsum.

## CLI
```
$ npm install --global faique
```

```
$ faique --help

  Usage
    faique input

  Examples
    $ faique H3A0G4
    ...
```

## License
AGPL-v3 © [Robin Millette](http://robin.millette.info)

[update-notifier]: <https://github.com/yeoman/update-notifier>
