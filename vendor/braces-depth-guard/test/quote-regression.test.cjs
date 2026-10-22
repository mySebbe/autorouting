'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const braces = require('braces');

test('unclosed quotes keep following braces literal', () => {
  for (const quote of ['\"', "'", '`']) {
    assert.deepEqual(braces.expand(quote + '{a,b}'), ['{a,b}']);
  }
});

test('the depth guard still rejects excessive nesting', () => {
  const pattern = '{'.repeat(101) + 'a' + '}'.repeat(101);
  assert.throws(() => braces.expand(pattern), /exceeds max depth/);
});
