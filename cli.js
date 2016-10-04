#!/usr/bin/env node

/*
FAI (ISP) in Québec.

Copyright 2016
Robin Millette <robin@millette.info>
<http://robin.millette.info>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the
[GNU Affero General Public License](LICENSE.md)
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict'
const meow = require('meow')
const updateNotifier = require('update-notifier')
const faique = require('./')

updateNotifier({ pkg: require('./package.json') }).notify()

const cli = meow([
  'Usage',
  '  $ faique [input]',
  '',
  'Options',
  '  --foo  Lorem ipsum. [Default: false]',
  '',
  'Examples',
  '  $ faique',
  '  unicorns & rainbows',
  '  $ faique ponies',
  '  ponies & rainbows'
])

const pc = cli.input[0] || 'H2K4B2'
const jsonlog = (a) => console.log(JSON.stringify(a, null, ' '))

Promise.all([faique.acanac(pc), faique.ebox(pc), faique.teksavvy(pc)])
  .then(jsonlog)
  .catch(console.error)
