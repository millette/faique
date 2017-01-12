'use strict'
import test from 'ava'
import fn from './'

test('ebox j0k1s0', async t => {
  const result = await fn.ebox('j0k1s0')
  t.is(result.cable_available, 'V-Cable')
  t.not(result.areservicessupported, 'Yes')
  t.not(result.rateband, 'F')
})

test('ebox j0k2r0', async t => {
  const result = await fn.ebox('j0k2r0')
  t.is(result.cable_available, 'V-Cable')
  t.is(result.areservicessupported, 'Yes')
  t.is(result.rateband, 'F')
})

test('ebox h2k4b2', async t => {
  const result = await fn.ebox('h2k4b2')
  t.is(result.cable_available, 'V-Cable')
  t.is(result.areservicessupported, 'Yes')
  t.is(result.rateband, 'B')
})

test('teksavvy j0k1s0', async t => {
  const result = await fn.teksavvy('j0k1s0')
  t.not(result.indexOf('C-TTALKPREM'), -1)
  t.not(result.indexOf('C-DSLLITE'), -1)
  t.not(result.indexOf('C-DSL15'), -1)
  t.is(result.indexOf('C-VCABLE5PRO'), -1)
})

test('teksavvy j0k2r0', async t => {
  const result = await fn.teksavvy('j0k2r0')
  t.not(result.indexOf('C-TTALKPREM'), -1)
  t.is(result.indexOf('C-DSLLITE'), -1)
  t.is(result.indexOf('C-DSL15'), -1)
  t.is(result.indexOf('C-VCABLE5PRO'), -1)
})

test('teksavvy h2k4b2', async t => {
  const result = await fn.teksavvy('h2k4b2')
  t.not(result.indexOf('C-TTALKPREM'), -1)
  t.not(result.indexOf('C-DSLLITE'), -1)
  t.not(result.indexOf('C-DSL15'), -1)
  t.not(result.indexOf('C-VCABLE5PRO'), -1)
})

test('acanac j0k1s0', async t => {
  const result = await fn.acanac('j0k1s0')
  t.falsy(result.AvailabilityLookupError)
  t.is(result.InternetOptions.length, 0)
  t.is(result.TVOptions.length, 0)
  t.is(result.PhoneOptions[0].ID, 1028)
})

test('acanac j0k2r0', async t => {
  const result = await fn.acanac('j0k2r0')
  t.falsy(result.AvailabilityLookupError)
  t.is(result.InternetOptions.length, 5)
  t.is(result.PhoneOptions[0].ID, 1028)
  t.is(result.TVOptions.length, 0)
})

test('acanac h2k4b2', async t => {
  const result = await fn.acanac('h2k4b2')
  t.falsy(result.AvailabilityLookupError)
  t.is(result.InternetOptions.length, 8)
  t.is(result.PhoneOptions[0].ID, 1028)
  t.is(result.TVOptions.length, 0)
})
