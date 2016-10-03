/*
FAI (ISP) in Québec.

Copyright 2016
Robin Millette <mailto:robin@millette.info>
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

// npm
const fetchPony = require('fetch-ponyfill')({})
const xml2js = require('xml2js')
const pify = require('pify')

const xml2jsParse = (() => {
  const xml2jsParseImp = pify(xml2js.parseString)
  return (str) => xml2jsParseImp(str, {
    explicitArray: false, normalizeTags: true
  })
})()

exports.ebox = {
  API: 'http://www.ebox.ca/wp-content/themes/ebox_v2/validationtool_combo/controler_ajax.php',
  postalCode: (str) => fetchPony.fetch(exports.ebox.API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `checkprov=QC&lng=fr&zip=&search=${str}&action=searchAddressAC`
  })
    .then((res) => res.json()),

  deets: (obj) => fetchPony.fetch(exports.ebox.API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `action=queryBell&civicno=${obj.safn}&street=${obj.sn}&sdc=&stc=${obj.stc}&municipality=${obj.mn}&bellprov=${obj.pc}&zip=${obj.zip}&lng=fr`
  })
    .then((res) => res.text())
    .then(xml2jsParse)
    .then((x) => x.xml),

  postalCodeDeets: (str) => exports.ebox.postalCode(str)
    .then((x) => x[0])
    .then(exports.ebox.deets)
}

exports.teksavvy = {
  API: 'https://teksavvy.com/TekSavvy.ProductTabs/AvailabilityCheck/CheckAvailability',
  postalCode: (str) => fetchPony.fetch(exports.teksavvy.API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `PostalCode=${str}&phone-submit=V%C3%A9rifier+maintenant&returnUrl=https%3A%2F%2Fteksavvy.com%2Ffr%2Fresidential%2Finternet%2Fcable&__RequestVerificationToken=Ua3XK0T0EiJ93UQEKkW8UdA859Z0xe%2BVqgWHlflMpKkob3vBG83r5ljUPJDT1n1TJrJwdWDZrWZ0C653Np1K65OCQkjmaGz4hFP%2FLHAebWFP2KwZF45QSqe%2FnLYTXybIh%2BT%2FF5HqjPdDAFOYFiRNb2jiBCwYV5IKb4q8hgyeCo%2B5RrdXHJlVMV%2Fv%2FbXAkFYt8TotKTpAAHaBi4oTpcqY4Q%3D%3D`
  }),
  deets: (obj) => {},
  postalCodeDeets: (str) => {}
}
